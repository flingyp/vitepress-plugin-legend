<script lang="ts" setup>
import { ref } from 'vue';
import MindMapRoot from './MindMapRoot.vue';

interface PreviewMarkmapPathProps {
  path: string;
}

withDefaults(defineProps<PreviewMarkmapPathProps>(), {});

const markdown = ref('');
</script>

<template>
  <div class="vitepress-markmap-preview">
    <ClientOnly>
      <MindMapRoot v-if="markdown" type="view" :markdown="markdown" />
    </ClientOnly>
  </div>
</template>

<style scoped>
.vitepress-markmap-preview {
  width: 100%;
  min-height: 400px;
  margin: 1rem 0;
}

.loading {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  color: #666;
}
</style>
