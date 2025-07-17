<template>
  <svg ref="svgRef" class="mindmap"></svg>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
// import { md2markmapData } from './index';
import { fillTemplate } from 'markmap-render';
import { Transformer } from 'markmap-lib';
import { Markmap } from 'markmap-view';

interface MindMapRenderProps {
  type: 'renderer';
  markdown?: string;
}

const props = defineProps<MindMapRenderProps>();
console.log('props:', props);

const svgRef = ref();
let mm: any = null; // markmap 实例
const htmlContent = ref('');

onMounted(() => {
  const transformer = new Transformer();
  const { root } = transformer.transform(decodeURIComponent(props.markdown!));

  // htmlContent.value = fillTemplate(root, {}, {});
  // console.log(' htmlContent.value:', htmlContent.value);

  // 首次渲染
  if (!mm) {
    mm = Markmap.create(svgRef.value, {}, root);
  } else {
    // 后续只更新数据
    mm.setData(root);
    mm.fit(); // 自适应窗口
  }
});

watch(
  () => props.markdown,
  () => {
    renderMarkmap();
  },
);

function renderMarkmap() {
  // if (container.value) {
  //   container.value.innerHTML = '';
  //   const { root } = md2markmapData(props.markdown);
  //   Markmap.create(container.value, undefined, root);
  // }
}
</script>
