import flypeng from '@flypeng/eslint-config';

/** @type {import('eslint').Linter.Config[]} */
export default [
    ...flypeng(),
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
