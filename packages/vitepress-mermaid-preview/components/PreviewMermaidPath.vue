<script lang="ts" setup>
import { ref } from 'vue';
import MermaidChart from './MermaidChart.vue';

interface PreviewMermaidPathProps {
  path: string;
}

withDefaults(defineProps<PreviewMermaidPathProps>(), {});

const mermaidCode = ref('');
</script>

<template>
  <div class="vitepress-mermaid-preview">
    <ClientOnly>
      <MermaidChart v-if="mermaidCode" :code="mermaidCode" />
    </ClientOnly>
  </div>
</template>

<style scoped>
.vitepress-mermaid-preview {
  width: 100%;
  margin: 1rem 0;
}
</style>
