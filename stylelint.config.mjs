/** @type {import('stylelint').Config} */
export default {
    extends: '@flypeng/stylelint-config',
    ignoreFiles: ['core/dist/**/*'],
    rules: {
        'selector-pseudo-class-no-unknown': [
            true,
            {
                ignorePseudoClasses: ['deep'],
            },
        ],
    },
};
