<script setup lang="ts">
import { ref, onMounted, computed, nextTick } from 'vue';
import mermaid from 'mermaid';
import { useCopyContent } from '@flypeng/tool/browser';
import { snapdom } from '@zumer/snapdom';
import { useMutationObserver } from '@vueuse/core';
import { UseFullscreen } from '@vueuse/components';
import { Toaster, toast } from 'vue-sonner';
import { Icon } from '@iconify/vue';
import 'vue-sonner/style.css';

interface MermaidChartProps {
  code?: string;
  showToolbar?: '0' | '1';
}

const props = withDefaults(defineProps<MermaidChartProps>(), {
  code: '',
  showToolbar: '0',
});

const renderCode = computed(() => {
  return decodeURIComponent(props.code);
});
const renderChartHtml = ref();
const mermaidRef = ref<HTMLElement>();

const dragOffset = ref({ x: 0, y: 0 }); // 当前平移
const dragStart = ref({ x: 0, y: 0 }); // 鼠标按下时的坐标
const isDragging = ref(false);

function updateSvgTransform() {
  const svgEl = mermaidRef.value?.querySelector('svg');
  if (svgEl) {
    svgEl.style.transform = `translate(${dragOffset.value.x}px, ${dragOffset.value.y}px) scale(${zoomLevel.value})`;
  }
}

function onSvgMouseDown(e: MouseEvent) {
  isDragging.value = true;
  dragStart.value = { x: e.clientX, y: e.clientY };
  document.body.style.userSelect = 'none';
  const { x, y } = dragOffset.value;

  function onMouseMove(ev: MouseEvent) {
    if (!isDragging.value) return;
    const dx = ev.clientX - dragStart.value.x;
    const dy = ev.clientY - dragStart.value.y;
    dragOffset.value = { x: x + dx, y: y + dy };
    updateSvgTransform();
  }

  function onMouseUp() {
    isDragging.value = false;
    document.body.style.userSelect = '';
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);
  }

  window.addEventListener('mousemove', onMouseMove);
  window.addEventListener('mouseup', onMouseUp);
}

async function render() {
  if (!mermaidRef.value) return;

  mermaidRef.value.innerHTML = '';

  // 根据当前主题设置 mermaid 主题
  await mermaid.initialize({
    startOnLoad: false,
    theme: document.documentElement.classList.contains('dark')
      ? 'dark'
      : 'default',
    securityLevel: 'loose', // 允许点击交互
  });
  const id = Math.random().toString(36).substring(2, 15);
  const { svg } = await mermaid.render(
    `mermaid-${id}`,
    renderCode.value,
    mermaidRef.value,
  );
  renderChartHtml.value = svg;

  // 渲染后绑定拖拽事件
  nextTick(() => {
    const svgEl = mermaidRef.value?.querySelector('svg');
    if (svgEl) {
      svgEl.style.cursor = 'grab';
      svgEl.onmousedown = onSvgMouseDown;
      updateSvgTransform();
    }
  });
}

// 下载Mermaid图表为PNG
async function downloadChart() {
  if (!mermaidRef.value) return;

  try {
    // 使用 snapdom 截图
    const result = await snapdom(mermaidRef.value, {
      scale: 2,
      quality: 1,
      backgroundColor: getComputedStyle(
        document.documentElement,
      ).getPropertyValue('--vp-c-bg-soft'),
    });
    console.log('result:', result);

    await result.download({ format: 'png', filename: 'mermaid-chart' });
    toast.success('图表下载成功！');
  } catch (error) {
    console.error('下载失败:', error);
    toast.error('下载失败，请重试');
  }
}

const zoomLevel = ref(1);
// 放大
function zoomIn() {
  zoomLevel.value *= 1.1;
  updateSvgTransform();
}

// 缩小
function zoomOut() {
  zoomLevel.value /= 1.1;
  updateSvgTransform();
}

// 适应屏幕
function fit() {
  zoomLevel.value = 1;
  dragOffset.value = { x: 0, y: 0 };
  updateSvgTransform();
}

// 复制Mermaid代码到剪贴板
async function copyCode() {
  if (!renderCode.value) return;

  try {
    useCopyContent(renderCode.value);
    toast.success('代码复制成功！');
  } catch (error) {
    console.error('复制失败:', error);
    toast.error('复制失败，请重试');
  }
}

// 监听 mermaidRef 的 class 属性变化，如果发生变化，则重新渲染图表
useMutationObserver(
  mermaidRef,
  async () => {
    await render();
    fit();
  },
  {
    attributes: true, // 监听属性
    attributeFilter: ['class'], // 只关心这几个
  },
);

// 存储MutationObserver实例
const darkModeObserver = ref<MutationObserver>();
onMounted(() => {
  // 初始渲染
  render();

  // 监听DOM变化，检测暗黑模式类的添加/移除
  if (typeof window !== 'undefined' && window.MutationObserver) {
    darkModeObserver.value = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (
          mutation.attributeName === 'class' &&
          mutation.target === document.documentElement
        ) {
          // 当HTML元素的类变化时，重新渲染图表
          render();
          break;
        }
      }
    });

    // 监听html标签的class属性变化
    darkModeObserver.value.observe(document.documentElement, {
      attributes: true,
    });
  }

  // 监听系统主题变化
  if (typeof window !== 'undefined' && window.matchMedia) {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', () => {
        render();
      });
  }

  // 监听页面大小变化
  if (typeof window !== 'undefined') {
    window.addEventListener('resize', () => {
      fit();
    });
  }
});
</script>

<template>
  <div class="mermaid-container">
    <UseFullscreen v-slot="{ toggle, isFullscreen }">
      <div
        ref="mermaidRef"
        :class="['mermaid', isFullscreen && 'mermaid-fullscreen']"
        v-html="renderChartHtml"
      />
      <!-- 工具栏 -->
      <div v-show="Number(props.showToolbar) === 1" class="mermaid-toolbar">
        <button class="toolbar-btn" title="放大" @click="zoomIn">
          <Icon icon="lucide:zoom-in" />
        </button>
        <button class="toolbar-btn" title="缩小" @click="zoomOut">
          <Icon icon="lucide:zoom-out" />
        </button>
        <button class="toolbar-btn" title="适应屏幕" @click="fit">
          <Icon icon="lucide:maximize-2" />
        </button>
        <button class="toolbar-btn" title="复制代码" @click="copyCode">
          <Icon icon="lucide:copy" />
        </button>
        <button class="toolbar-btn" title="下载图表" @click="downloadChart">
          <Icon icon="lucide:download" />
        </button>
        <button class="toolbar-btn" title="全屏" @click="toggle">
          <Icon
            :icon="isFullscreen ? 'lucide:minimize-2' : 'lucide:maximize'"
          />
        </button>
      </div>
    </UseFullscreen>
  </div>

  <Toaster position="top-right" rich-colors />
</template>

<style lang="scss">
.mermaid {
  & > svg {
    width: 100%;
    max-width: 100% !important;
    height: 100%;
    margin: 0 auto;
    overflow: hidden;
    /* stylelint-disable */
    transform: scale(v-bind(zoomLevel));
    transition: transform 0.3s ease;
  }
}
</style>

<style lang="scss" scoped>
.mermaid-container {
  position: relative;

  &:hover .mermaid-toolbar {
    opacity: 1;
  }
}

.mermaid {
  width: 100%;
  height: 300px;
  margin: 16px 0;
  padding: 12px;
  overflow: auto;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  transition:
    background-color 0.5s,
    border-color 0.5s;
}

.mermaid-toolbar {
  position: absolute;
  right: 0.5rem;
  bottom: 0.5rem;
  z-index: 10;
  display: flex;
  gap: 0.2rem;
  padding: 0.3rem;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 1.5rem;
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
  opacity: 0;
  backdrop-filter: blur(8px);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
    transform: translateY(-2px);
    opacity: 1;
  }
}

.toolbar-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  padding: 0;
  font-size: 1.1rem;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;

  :deep(svg) {
    width: 1.1rem;
    height: 1.1rem;
  }

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }
}

.mermaid-fullscreen {
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: var(--vp-c-bg-soft);
  inset: 0;

  /* 在全屏模式下确保svg内容高度为100% */
  & > svg {
    height: 100% !important;
  }
}
</style>
