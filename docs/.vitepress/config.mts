import { defineConfig } from 'vitepress';
import { vitepressMarkmapPreview } from 'vitepress-markmap-preview';
import { vitepressMermaidPreview } from 'vitepress-mermaid-preview';

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: '/vitepress-plugin-legend',
    title: 'vitepress-plugin-legend',
    description: 'Legend for vitepress',
    themeConfig: {
        socialLinks: [
            {
                icon: 'github',
                link: 'https://github.com/flingyp/vitepress-plugin-legend',
            },
        ],
    },
    markdown: {
        theme: {
            light: 'vitesse-light',
            dark: 'vitesse-dark',
        },
        config(md) {
            // 使用更多的 Markdown-it 插件！
            md.use(vitepressMarkmapPreview, { showToolbar: true });
            md.use(vitepressMermaidPreview);
        },
    },
});
