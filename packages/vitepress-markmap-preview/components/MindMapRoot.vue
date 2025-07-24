<script setup lang="ts">
import {
  onMounted,
  ref,
  shallowRef,
  watch,
  onBeforeUnmount,
  computed,
} from 'vue';
import { Transformer } from 'markmap-lib';
import { Markmap } from 'markmap-view';
import type { IMarkmapOptions } from 'markmap-view';
import { snapdom } from '@zumer/snapdom';
import { useCopyContent } from '@flypeng/tool/browser';
import { Toaster, toast } from 'vue-sonner';
import 'vue-sonner/style.css';
import { UseFullscreen } from '@vueuse/components';

interface MindMapRenderProps {
  markdown: string;
  type?: 'view';
  showToolbar?: '0' | '1';
}

const props = withDefaults(defineProps<MindMapRenderProps>(), {
  type: 'view',
  showToolbar: '0',
});

// 检测暗黑模式
const isDark = computed(() => {
  if (typeof document === 'undefined') return false;

  // 首先检查VitePress的暗黑模式类
  if (document.documentElement.classList.contains('dark')) {
    return true;
  }

  // 如果没有暗黑模式类，再检查系统主题
  if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    return true;
  }

  return false;
});

const mindmapContainerRef = ref<HTMLElement>();
const svgRef = ref();
const markmapIns = shallowRef<Markmap>();
const resizeObserver = ref<ResizeObserver>();

const mindmapId = ref<string>(
  `mindmap-${Math.random().toString(36).substring(2, 15)}`,
);

// 计算暗黑模式相关配置
const markmapOptions = computed<Partial<IMarkmapOptions>>(() => ({
  // autoFit: true,
  // fitRatio: 1,
  // initialExpandLevel: 3,
  // maxInitialScale: 1,
  // pan: false,
  // scrollForPan: false,
  // toggleRecursively: true,
  // zoom: true,
  // paddingX: 2,
  // spacingHorizontal: 5,
  // spacingVertical: 5,
  // duration: 200,
  // maxWidth: 600,
  color: (node: any) => {
    // 针对暗黑模式调整节点颜色
    return isDark.value
      ? getColorByDepth(node.depth, true)
      : getColorByDepth(node.depth, false);
  },
}));

// 根据节点深度获取颜色
function getColorByDepth(depth: number, isDarkMode: boolean) {
  // 暗黑模式下使用更明亮的颜色，亮模式下使用更深的颜色
  const lightModeColors = [
    '#2ecc71', // 绿色
    '#3498db', // 蓝色
    '#9b59b6', // 紫色
    '#e67e22', // 橙色
    '#e74c3c', // 红色
  ];

  const darkModeColors = [
    '#2ecc71', // 亮绿色
    '#3498db', // 亮蓝色
    '#9b59b6', // 亮紫色
    '#f39c12', // 亮橙色
    '#e74c3c', // 亮红色
  ];

  const colors = isDarkMode ? darkModeColors : lightModeColors;
  return colors[depth % colors.length];
}

// 渲染思维导图
function renderMarkmap() {
  if (!svgRef.value || !props.markdown) return;

  const transformer = new Transformer();
  const { root } = transformer.transform(decodeURIComponent(props.markdown));

  if (!markmapIns.value) {
    // 首次渲染，创建 Markmap 实例
    markmapIns.value = Markmap.create(svgRef.value, markmapOptions.value, root);
  } else {
    // 更新数据并重新布局
    markmapIns.value.setOptions(markmapOptions.value);
    markmapIns.value.setData(root);
    markmapIns.value.fit(); // 确保布局自适应
  }
}

// 下载思维导图为PNG图片
async function downloadAsPng() {
  if (!markmapIns.value || !svgRef.value || !mindmapContainerRef.value) return;

  // 保存当前状态
  const toolbar = mindmapContainerRef.value.querySelector(
    `#toolbar-${mindmapId.value}`,
  ) as HTMLElement;

  try {
    // 1. 隐藏工具栏
    if (toolbar) toolbar.style.display = 'none';

    // 2. 适应屏幕
    markmapIns.value.fit();

    // 3. 下载图片
    const result = await snapdom(mindmapContainerRef.value, {
      scale: 2,
      quality: 1,
      backgroundColor: getComputedStyle(
        document.documentElement,
      ).getPropertyValue('--vp-c-bg-soft'),
    });
    await result.download({ format: 'png', filename: 'mindmap' });
  } catch (e) {
    console.error('下载图片失败:', e);
    alert('下载图片失败，请检查浏览器安全设置或尝试其他浏览器');
  } finally {
    // 4. 恢复工具栏
    if (toolbar) toolbar.style.display = 'flex';
  }
}

function zoomIn() {
  if (markmapIns.value) markmapIns.value.rescale(1.25);
}

function zoomOut() {
  if (markmapIns.value) markmapIns.value.rescale(0.8);
}

function fit() {
  if (markmapIns.value) markmapIns.value.fit();
}

// 复制Markdown内容到剪贴板
async function copyMarkdownToClipboard() {
  if (!props.markdown) return;

  try {
    // 解码Markdown内容
    const markdownContent = decodeURIComponent(props.markdown);

    useCopyContent(markdownContent);

    toast.success('复制成功！');
  } catch (error) {
    console.error('复制失败:', error);
    toast.error('复制失败，请重试');
  }
}

// 处理容器尺寸变化，重新适配思维导图
function handleResize() {
  if (markmapIns.value) {
    // 延迟执行，确保 DOM 已更新
    setTimeout(() => {
      markmapIns.value?.fit();
    }, 100);
  }
}

// 监听 markdown 变化
watch(
  () => props.markdown,
  () => {
    renderMarkmap();
  },
);

// 监听主题变化
watch(
  () => isDark.value,
  () => {
    if (markmapIns.value) {
      // 更新配置并重新渲染
      markmapIns.value.setOptions(markmapOptions.value);
      markmapIns.value.renderData();
    }
  },
);

// 存储MutationObserver实例
const darkModeObserver = ref<MutationObserver | null>(null);

// 当系统主题变化时，重新渲染思维导图
function mediaThemeChange() {
  if (markmapIns.value) {
    markmapIns.value.setOptions(markmapOptions.value);
    markmapIns.value.renderData();
  }
}

onMounted(() => {
  renderMarkmap();

  // 创建 ResizeObserver 监听容器尺寸变化
  if (window.ResizeObserver) {
    resizeObserver.value = new ResizeObserver(handleResize);
    if (svgRef.value.parentElement) {
      resizeObserver.value.observe(svgRef.value.parentElement);
    }
  }

  // 监听窗口大小变化
  window.addEventListener('resize', handleResize);

  // 监听系统主题变化
  if (typeof window !== 'undefined' && window.matchMedia) {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', mediaThemeChange);
  }

  // 监听DOM变化，检测暗黑模式类的添加/移除
  if (typeof window !== 'undefined' && window.MutationObserver) {
    darkModeObserver.value = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (
          mutation.attributeName === 'class' &&
          mutation.target === document.documentElement
        ) {
          // 当HTML元素的类变化时，重新渲染思维导图
          if (markmapIns.value) {
            markmapIns.value.setOptions(markmapOptions.value);
            markmapIns.value.renderData();
          }
          break;
        }
      }
    });

    // 监听html标签的class属性变化
    darkModeObserver.value.observe(document.documentElement, {
      attributes: true,
    });
  }
});

onBeforeUnmount(() => {
  // 清理 ResizeObserver 和事件监听
  if (resizeObserver.value) {
    resizeObserver.value.disconnect();
  }
  window.removeEventListener('resize', handleResize);

  // 清理主题变化监听器
  if (typeof window !== 'undefined' && window.matchMedia) {
    const darkModeMediaQuery = window.matchMedia(
      '(prefers-color-scheme: dark)',
    );

    // 现代浏览器
    darkModeMediaQuery.removeEventListener('change', mediaThemeChange);
    // 旧版浏览器兼容
    darkModeMediaQuery.removeListener(() => {});
  }

  // 清理DOM观察器
  if (darkModeObserver.value) {
    darkModeObserver.value.disconnect();
  }
});

const mouseEnter = () => {
  const toolbar = window.document.querySelector(
    `#toolbar-${mindmapId.value}`,
  ) as HTMLElement;

  toolbar.style.opacity = '1';
};

const mouseLeave = () => {
  const toolbar = window.document.querySelector(
    `#toolbar-${mindmapId.value}`,
  ) as HTMLElement;

  toolbar.style.opacity = '0';
};
</script>

<template>
  <!-- 设置固定高度、宽度 100%、block 显示和主题适配的背景，使思维导图完全填充容器 -->
  <UseFullscreen v-slot="{ toggle, isFullscreen }">
    <div
      ref="mindmapContainerRef"
      class="mindmap-container"
      @mouseenter="mouseEnter"
      @mouseleave="mouseLeave"
    >
      <svg ref="svgRef" style="min-height: 400px"></svg>

      <!-- 工具栏 -->
      <div
        v-show="Number(props.showToolbar) === 1"
        :id="`toolbar-${mindmapId}`"
        class="toolbar"
      >
        <button class="btn" title="放大" @click="zoomIn">🔍</button>
        <button class="btn" title="缩小" @click="zoomOut">🔎</button>
        <button class="btn" title="适应屏幕" @click="fit">🔁</button>
        <button
          class="btn"
          title="复制Markdown内容"
          @click="copyMarkdownToClipboard"
        >
          📋
        </button>
        <button class="btn" title="下载为PNG图片" @click="downloadAsPng">
          ⬇️
        </button>
        <button class="btn" title="全屏" @click="toggle">
          {{ isFullscreen ? '🔲' : '🔳' }}
        </button>
      </div>
    </div>
  </UseFullscreen>

  <Toaster position="top-right" rich-colors />
</template>

<style lang="scss" scoped>
.mindmap-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 12px;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  transition:
    background-color 0.5s,
    border-color 0.5s;

  & > svg {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
}

/* 暗模式下的SVG文本颜色适配 */
:deep(.markmap-node) {
  color: var(--vp-c-text-1);
  font-weight: 500;
}

:deep(circle) {
  fill: var(--vp-c-brand-1);
}

:deep(.markmap-node-text) {
  transition: fill 0.5s;
  fill: var(--vp-c-text-1);
}

:deep(.markmap-link) {
  transition: stroke 0.5s;
  stroke: var(--vp-c-divider);
}

.toolbar {
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

.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  padding: 0;
  color: var(--vp-c-text-1);
  font-size: 1.1rem;
  background: transparent;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: var(--vp-c-brand);
    background: var(--vp-c-brand-dimm);
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }
}
</style>
