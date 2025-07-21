<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import mermaid from 'mermaid';

interface MermaidChartProps {
  code: string;
}

const props = withDefaults(defineProps<MermaidChartProps>(), {
  code: '',
});

const renderCode = computed(() => {
  return decodeURIComponent(props.code);
});
const renderChartHtml = ref();

const mermaidEl = ref<HTMLElement>();

async function render() {
  if (!mermaidEl.value) return;

  mermaidEl.value.innerHTML = '';

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
    mermaidEl.value,
  );
  renderChartHtml.value = svg;
}

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
});
</script>

<template>
  <div class="mermaid-container">
    <div ref="mermaidEl" class="mermaid" v-html="renderChartHtml"></div>
  </div>
</template>

<style lang="scss">
.mermaid {
  & > svg {
    margin: 0 auto;
  }
}
</style>

<style lang="scss" scoped>
.mermaid-container {
  position: relative;
  width: 100%;
}

.mermaid {
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
</style>
