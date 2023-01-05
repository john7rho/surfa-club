/* eslint-disable no-undef */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-unused-vars': 'off',
    indent: 'off',
    'linebreak-style': ['warn', 'unix'],
    quotes: ['warn', 'single'],
    semi: ['warn', 'always'],
    'comma-dangle': ['error', 'only-multiline'],
  },
};
