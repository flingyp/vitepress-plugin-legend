import { defineConfig } from 'vitepress';
import { vitepressPluginLegend } from 'vitepress-plugin-legend';
// import { vitepressMarkmapPreview } from 'vitepress-markmap-preview';
// import { vitepressMermaidPreview } from 'vitepress-mermaid-preview';

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: '/vitepress-plugin-legend',
    locales: {
        root: {
            label: '简体中文',
            lang: 'zh-CN',
            title: 'vitepress-plugin-legend',
            description: 'VitePress 的图例插件集合',
            themeConfig: {
                nav: [
                    {
                        text: '首页',
                        link: '/',
                    },
                    {
                        text: 'Markmap 预览插件',
                        link: '/markmap/',
                    },
                    {
                        text: 'Mermaid 预览插件',
                        link: '/mermaid/',
                    },
                    {
                        text: '示例',
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
                outline: {
                    label: '页面导航',
                },
                lastUpdated: {
                    text: '最后更新于',
                    formatOptions: {
                        dateStyle: 'short',
                        timeStyle: 'medium',
                    },
                },
                docFooter: {
                    prev: '上一页',
                    next: '下一页',
                },
                darkModeSwitchLabel: '主题',
                sidebarMenuLabel: '菜单',
                returnToTopLabel: '回到顶部',
            },
        },
        en: {
            label: 'English',
            lang: 'en-US',
            link: '/en/',
            title: 'vitepress-plugin-legend',
            description: "VitePress's legend plugin collection",
            themeConfig: {
                nav: [
                    {
                        text: 'Home',
                        link: '/en/',
                    },
                    {
                        text: 'Markmap Preview',
                        link: '/en/markmap/',
                    },
                    {
                        text: 'Mermaid Preview',
                        link: '/en/mermaid/',
                    },
                    {
                        text: 'Example',
                        link: '/en/example/markmap',
                    },
                ],
                sidebar: {
                    '/en/example/': [
                        {
                            text: 'Markmap',
                            link: '/en/example/markmap',
                        },
                        {
                            text: 'Mermaid',
                            link: '/en/example/mermaid',
                        },
                    ],
                },
                outline: {
                    label: 'On this page',
                },
                lastUpdated: {
                    text: 'Last updated',
                    formatOptions: {
                        dateStyle: 'short',
                        timeStyle: 'medium',
                    },
                },
                docFooter: {
                    prev: 'Previous page',
                    next: 'Next page',
                },
                darkModeSwitchLabel: 'Theme',
                sidebarMenuLabel: 'Menu',
                returnToTopLabel: 'Return to top',
            },
        },
    },
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
            vitepressPluginLegend(md, {
                markmap: {
                    showToolbar: true,
                },
                mermaid: {
                    showToolbar: true,
                },
            });

            // md.use(vitepressMarkmapPreview, { showToolbar: true });
            // md.use(vitepressMermaidPreview);
        },
    },
});
