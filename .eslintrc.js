module.exports = {
  env: {
    'jest/globals': true,
  },
  parser: 'babel-eslint',
  plugins: ['jest'],
  extends: [
    'airbnb',
    'standard',
    'plugin:promise/recommended',
    'plugin:jest/recommended',
  ],
  rules: {
    // style
    'space-before-function-paren': ['error', 'never'],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
    quotes: ['error', 'single', { avoidEscape: true }],
    'no-multi-spaces': [
      'error',
      {
        exceptions: {
          Property: true,
          ImportDeclaration: true,
        },
      },
    ],
    'key-spacing': [
      'error',
      {
        mode: 'strict',
        align: 'value',
      },
    ],
    'arrow-parens': ['error', 'as-needed'],
    'function-paren-newline': ['off'], // handled by prettier

    // other
    'no-console': 'off',
    'import/prefer-default-export': ['warn'],
    'no-underscore-dangle': ['off'],
    'global-require': ['warn'],
  },
}
