import flypeng from '@flypeng/eslint-config';

/** @type {import('eslint').Linter.Config[]} */
export default [
    ...flypeng(),
    {
        files: ['packages/**/*.vue'],
        rules: {
            'vue/no-v-html': 'off',
        },
    },
    {
        ignores: [
            'packages/**/dist',
            'docs/.vitepress/dist',
            'docs/.vitepress/cache',
            'README.md',
            'README.zh-CN.md',
        ],
    },
];
