module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier',
    'stylelint-config-standard-scss',
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'color-hex-length': 'long',
    indentation: 2,
    'color-no-invalid-hex': [true],
    'font-family-no-duplicate-names': true,
    'color-named': 'never',
    'color-hex-case': ['lower'],
    'comment-no-empty': true,
    'string-quotes': 'single',
    'at-rule-no-unknown': [
      true,
      { ignoreAtRules: ['include', 'mixin', 'each', 'extend'] },
    ],
    'at-rule-empty-line-before': 'never',
    'no-descending-specificity': null,
    'selector-type-no-unknown': null,
    'rule-empty-line-before': 'never-multi-line',
    'selector-list-comma-newline-after': 'never-multi-line'
  },
};
