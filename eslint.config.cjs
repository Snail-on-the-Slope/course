const tseslint = require('typescript-eslint');
const angular = require('@angular-eslint/eslint-plugin');
const templateParser = require('@angular-eslint/template-parser');
const templatePlugin = require('@angular-eslint/eslint-plugin-template');

module.exports = [
  {
    files: ['**/*.ts'],
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:@angular-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', '@angular-eslint'],
    rules: {
      '@angular-eslint/component-selector': ['error', { type: 'element', prefix: 'app', style: 'kebab-case' }],
      '@angular-eslint/directive-selector': ['error', { type: 'attribute', prefix: 'app', style: 'camelCase' }],
    },
  },
  {
    files: ['**/*.html'],
    extends: ['plugin:@angular-eslint/template/recommended'],
    parser: '@angular-eslint/template-parser',
    plugins: ['@angular-eslint/template'],
    rules: {
      '@angular-eslint/template/banana-in-box': 'error',
      '@angular-eslint/template/eqeqeq': 'error',
      '@angular-eslint/template/no-negated-async': 'error',
    },
  },
];

module.exports = tseslint.config(...tseslint.configs.recommended, {
  files: ['**/*.html'],
  plugins: {
    '@angular-eslint/template': templatePlugin,
  },
  processor: templateParser,
  rules: {
    '@angular-eslint/template/banana-in-box': 'error',
    '@angular-eslint/template/eqeqeq': 'error',
    '@angular-eslint/template/no-negated-async': 'error',
  },
});
