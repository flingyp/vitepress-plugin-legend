<script lang="ts" setup>
import { ref } from 'vue';
import MermaidChart from './MermaidChart.vue';

interface PreviewMermaidPathProps {
  path: string;
  showToolbar?: '0' | '1';
}

const props = withDefaults(defineProps<PreviewMermaidPathProps>(), {
  showToolbar: '0',
});

const mermaidCode = ref('');
</script>

<template>
  <div class="vitepress-mermaid-preview">
    <ClientOnly>
      <MermaidChart
        v-if="mermaidCode"
        :code="mermaidCode"
        :show-toolbar="props.showToolbar"
      />
    </ClientOnly>
  </div>
</template>

<style scoped>
.vitepress-mermaid-preview {
  width: 100%;
  margin: 1rem 0;
}
</style>
