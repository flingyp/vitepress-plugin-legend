<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
import { Infographic } from '@antv/infographic';
import { useCopyContent } from '@flypeng/tool/browser';
import { snapdom } from '@zumer/snapdom';
import { Toaster, toast } from 'vue-sonner';
import { Icon } from '@iconify/vue';
import { UseFullscreen } from '@vueuse/components';
import 'vue-sonner/style.css';

interface InfographicChartProps {
  code?: string;
  showToolbar?: '0' | '1';
}

const props = withDefaults(defineProps<InfographicChartProps>(), {
  code: '',
  showToolbar: '0',
});

const renderCode = computed(() => {
  let code = decodeURIComponent(props.code);
  code = code.replace(/^---\s*[\s\S]*?\s*---\s*/g, '');
  return code;
});

const containerRef = ref<HTMLElement>();
let infographic: Infographic | null = null;
const isLoading = ref(false);
const errorMessage = ref('');

const darkModeObserver = ref<MutationObserver>();

async function renderChart() {
  if (!containerRef.value || !renderCode.value) return;

  isLoading.value = true;
  errorMessage.value = '';

  try {
    if (infographic) {
      infographic.destroy();
    }

    const isDark = document.documentElement.classList.contains('dark');
    infographic = new Infographic({
      container: containerRef.value,
      width: '100%',
      height: '100%',
      theme: isDark ? 'dark' : 'light',
    });

    infographic.on('error', (error) => {
      console.error('Infographic error:', error);
      errorMessage.value = `渲染失败: ${error}`;
      isLoading.value = false;
    });

    infographic.on('warning', (warning) => {
      console.warn('Infographic warning:', warning);
    });

    infographic.on('rendered', () => {
      isLoading.value = false;
    });

    infographic.render(renderCode.value);
  } catch (error) {
    console.error('Failed to render infographic:', error);
    errorMessage.value = `渲染失败: ${error instanceof Error ? error.message : String(error)}`;
    isLoading.value = false;
  }
}

async function downloadChart() {
  if (!containerRef.value || !infographic) return;

  try {
    const url = await infographic.toDataURL({ type: 'png' });
    const link = document.createElement('a');
    link.href = url;
    link.download = 'infographic.png';
    link.click();
    toast.success('图表下载成功！');
  } catch (error) {
    console.error('Download failed:', error);

    try {
      const result = await snapdom(containerRef.value, {
        scale: 2,
        quality: 1,
        backgroundColor: getComputedStyle(
          document.documentElement,
        ).getPropertyValue('--vp-c-bg-soft'),
      });
      await result.download({ format: 'png', filename: 'infographic' });
      toast.success('图表下载成功！');
    } catch (snapError) {
      console.error('截图下载失败:', snapError);
      toast.error('下载失败，请重试');
    }
  }
}

const zoomLevel = ref(1);

function updateTransform() {
  const svgEl = containerRef.value?.querySelector('svg');
  if (svgEl) {
    svgEl.style.transform = `scale(${zoomLevel.value})`;
  }
}

function zoomIn() {
  zoomLevel.value *= 1.1;
  updateTransform();
}

function zoomOut() {
  zoomLevel.value /= 1.1;
  updateTransform();
}

function fit() {
  zoomLevel.value = 1;
  updateTransform();
}

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

function checkTheme() {
  if (infographic) {
    const isDark = document.documentElement.classList.contains('dark');
    infographic.update({
      theme: isDark ? 'dark' : 'light',
    });
  }
}

onMounted(() => {
  renderChart();

  window.addEventListener('resize', fit);

  if (typeof window !== 'undefined' && window.matchMedia) {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', checkTheme);
  }

  if (typeof window !== 'undefined' && window.MutationObserver) {
    darkModeObserver.value = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (
          mutation.attributeName === 'class' &&
          mutation.target === document.documentElement
        ) {
          checkTheme();
          break;
        }
      }
    });

    darkModeObserver.value.observe(document.documentElement, {
      attributes: true,
    });
  }
});

onBeforeUnmount(() => {
  if (infographic) {
    infographic.destroy();
    infographic = null;
  }

  window.removeEventListener('resize', fit);

  if (typeof window !== 'undefined' && window.matchMedia) {
    const darkModeMediaQuery = window.matchMedia(
      '(prefers-color-scheme: dark)',
    );
    darkModeMediaQuery.removeEventListener('change', checkTheme);
  }

  if (darkModeObserver.value) {
    darkModeObserver.value.disconnect();
  }
});
</script>

<template>
  <div class="infographic-container">
    <UseFullscreen v-slot="{ toggle, isFullscreen }">
      <div
        ref="containerRef"
        :class="['infographic', isFullscreen && 'infographic-fullscreen']"
      >
        <div v-if="isLoading" class="loading-overlay">
          <div class="spinner"></div>
        </div>
        <div v-if="errorMessage" class="error-message">
          {{ errorMessage }}
        </div>
      </div>

      <div v-show="Number(props.showToolbar) === 1" class="infographic-toolbar">
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

<style lang="scss" scoped>
.infographic-container {
  position: relative;

  &:hover .infographic-toolbar {
    opacity: 1;
  }
}

.infographic {
  width: 100%;
  min-height: 400px;
  max-height: 600px;
  margin: 16px 0;
  padding: 12px;
  overflow: auto;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  transition:
    background-color 0.5s,
    border-color 0.5s;

  :deep(svg) {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    transform: scale(v-bind(zoomlevel));
    transition: transform 0.3s ease;
  }
}

.infographic-fullscreen {
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: var(--vp-c-bg-soft);
  inset: 0;

  :deep(svg) {
    height: 100% !important;
  }
}

.loading-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(0 0 0 / 10%);
}

.spinner {
  width: 40px;
  height: 40px;
  border: 3px solid var(--vp-c-divider);
  border-top-color: var(--vp-c-brand);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.error-message {
  padding: 16px;
  color: var(--vp-c-danger-1);
  background: var(--vp-c-danger-soft);
  border: 1px solid var(--vp-c-danger-1);
  border-radius: 8px;
}

.infographic-toolbar {
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
</style>
