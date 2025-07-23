/** @type {import('stylelint').Config} */
export default {
    extends: '@flypeng/stylelint-config',
    ignoreFiles: ['packages/**/dist/**/*.css', 'dist/**/*.css'],
    rules: {
        'no-descending-specificity': null,
        'selector-pseudo-class-no-unknown': [
            true,
            {
                ignorePseudoClasses: ['deep'],
            },
        ],
    },
};
