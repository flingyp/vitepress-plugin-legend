<script lang="ts" setup>
import { ref, onMounted } from 'vue';

// 定义组件属性
const props = defineProps<{
  path: string;
}>();

const markdown = ref('');

onMounted(async () => {
  try {
    // 根据提供的路径获取 Markdown 内容
    const response = await fetch(props.path);
    if (!response.ok) {
      throw new Error(`Failed to load Markdown file: ${props.path}`);
    }

    markdown.value = await response.text();
  } catch (error) {
    console.error('Error loading Markdown file:', error);
    markdown.value = `# 加载失败\n\n无法加载文件: ${props.path}`;
  }
});
</script>

<template>
  <div class="vitepress-markmap-preview">
    <ClientOnly>
      <MindMapRoot v-if="markdown" type="render" :markdown="markdown" />
      <div v-else class="loading">加载中...</div>
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
