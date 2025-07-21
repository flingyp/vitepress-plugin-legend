<script setup lang="ts">
import { ref, onMounted } from 'vue';
import mermaid from 'mermaid';

interface MermaidChartProps {
  code: string;
}

const props = withDefaults(defineProps<MermaidChartProps>(), {
  code: `---
title: Frontmatter Example123
displayMode: compact
config:
  theme: forest
gantt:
    useWidth: 400
    compact: true
---
gantt
    section Waffle
        Iron  : 1982, 3y
        House : 1986, 3y
`,
});

const mermaidEl = ref<HTMLElement>();

/* ---------- 渲染函数 ---------- */
function render() {
  // 每次渲染前把旧 svg 清掉
  mermaidEl.value!.innerHTML = '';
  mermaid.initialize({ startOnLoad: true });
  bindClick();
}

/* ---------- 节点点击事件（事件委托） ---------- */
function bindClick() {
  mermaidEl.value!.addEventListener('click', (e) => {
    const node = (e.target as HTMLElement).closest('.node');
    if (!node) return;
    const text = node.querySelector('.label')?.textContent;
    alert(`你点了节点：${text}`);
  });
}

onMounted(() => {
  if (mermaidEl.value) {
    render();
  }
});
</script>

<template>
  <pre class="mermaid">
    {{ props.code }}
  </pre>
</template>

<style scoped>
.mermaid {
  margin: 20px 0;
  padding: 12px;
  overflow: auto;
  border: 1px dashed #ccc;
}
</style>
