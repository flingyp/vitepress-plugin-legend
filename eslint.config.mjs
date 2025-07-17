import flypeng from '@flypeng/eslint-config';

/** @type {import('eslint').Linter.Config[]} */
export default [
    ...flypeng(),
    {
        ignores: [
            'core/dist',
            'docs/.vitepress/dist',
            'docs/.vitepress/cache',
            'README.md',
        ],
    },
];
