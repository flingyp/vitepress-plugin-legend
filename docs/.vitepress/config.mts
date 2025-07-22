import { defineConfig } from 'vitepress';
import { vitepressPluginLegend } from 'vitepress-plugin-legend';
// import { vitepressMarkmapPreview } from 'vitepress-markmap-preview';
// import { vitepressMermaidPreview } from 'vitepress-mermaid-preview';

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
        nav: [
            {
                text: 'Home',
                link: '/',
            },
            {
                text: 'Vitepress Markmap Preview',
                link: '/markmap/',
            },

            {
                text: 'Vitepress Mermaid Preview',
                link: '/mermaid/',
            },
            {
                text: 'Example',
                link: '/example/markmap',
            },
        ],
        sidebar: {
            '/example/': [
                {
                    text: 'Markmap',
                    link: '/example/markmap',
                },
                {
                    text: 'Mermaid',
                    link: '/example/mermaid',
                },
            ],
        },
    },
    markdown: {
        theme: {
            light: 'vitesse-light',
            dark: 'vitesse-dark',
        },
        config(md) {
            // 使用更多的 Markdown-it 插件！
            vitepressPluginLegend(md, {
                markmap: {
                    showToolbar: false,
                },
                mermaid: true,
            });

            // md.use(vitepressMarkmapPreview, { showToolbar: true });
            // md.use(vitepressMermaidPreview);
        },
    },
});
