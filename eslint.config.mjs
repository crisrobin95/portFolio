import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt([
  {
    files: ['**/*.{js,mjs,cjs,ts,vue}'],
    rules: {
      'no-undef': 'off',
      'vue/first-attribute-linebreak': 'off',
      'no-unused-vars': ['off'],
      'arrow-spacing': ['error'],
      'object-curly-spacing': ['error', 'always'],
      'array-callback-return': ['off', { checkForEach: true }],
      'vue/require-default-prop': 'off',
      'vue/singleline-html-element-content-newline': 0,
      'vue/component-name-in-template-casing': ['error', 'PascalCase'],
      'vue/html-quotes': ['error', 'double', { avoidEscape: true }],
      'vue/mustache-interpolation-spacing': ['error', 'always'],
      'vue/no-multi-spaces': [
        'error',
        {
          ignoreProperties: false,
        },
      ],
      'vue/no-spaces-around-equal-signs-in-attribute': ['error'],
      'vue/v-on-style': ['error', 'shorthand'],
      'vue/v-bind-style': ['error', 'shorthand'],
      'vue/multi-word-component-names': 'off',
      'no-return-assign': 'off',
      'no-mixed-operators': 'off',
      'vue/no-setup-props-destructure': 'off',
      'vue/no-v-text-v-html-on-component': 'off',
      'vue/require-v-for-key': 'error',
      'vue/no-mutating-props': 'error',
    },
  },
])
