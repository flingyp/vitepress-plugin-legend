<template>
  <!-- 设置固定高度、宽度 100%、block 显示和主题适配的背景，使思维导图完全填充容器 -->
  <div class="mindmap-container">
    <svg ref="svgRef"></svg>
  </div>
</template>

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

interface MindMapRenderProps {
  type: 'view';
  markdown?: string;
}

const props = defineProps<MindMapRenderProps>();

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

const svgRef = ref();
const markmapIns = shallowRef();
const resizeObserver = ref<ResizeObserver>();

// 计算暗黑模式相关配置
const markmapOptions = computed(() => ({
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

// 处理容器尺寸变化，重新适配思维导图
function handleResize() {
  if (markmapIns.value) {
    // 延迟执行，确保 DOM 已更新
    setTimeout(() => {
      markmapIns.value.fit();
    }, 100);
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
      .addEventListener('change', () => {
        // 当系统主题变化时，重新渲染思维导图
        if (markmapIns.value) {
          markmapIns.value.setOptions(markmapOptions.value);
          markmapIns.value.renderData();
        }
      });
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

// 存储MutationObserver实例
const darkModeObserver = ref<MutationObserver | null>(null);

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
    // 使用匿名函数，所以这里只能移除全部监听器
    try {
      // 现代浏览器
      darkModeMediaQuery.removeEventListener('change', () => {});
    } catch (e) {
      // 旧版浏览器兼容
      try {
        darkModeMediaQuery.removeListener(() => {});
      } catch (e2) {
        // 忽略错误
      }
    }
  }

  // 清理DOM观察器
  if (darkModeObserver.value) {
    darkModeObserver.value.disconnect();
  }
});

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
</script>

<style scoped>
.mindmap-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 12px;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  transition:
    background-color 0.5s,
    border-color 0.5s;
}

.mindmap-container svg {
  width: 100%;
}

/* 暗模式下的SVG文本颜色适配 */
:deep(.markmap-node) {
  color: var(--vp-c-text-1);
}

:deep(.markmap-node-text) {
  transition: fill 0.5s;
  fill: var(--vp-c-text-1);
}

:deep(.markmap-link) {
  transition: stroke 0.5s;
  stroke: var(--vp-c-divider);
}
</style>
