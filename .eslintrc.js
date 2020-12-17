module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  extends: ['plugin:vue/essential', 'eslint:recommended'],
  plugins: ['vue', 'html'],
  globals: { "_": true },
  rules: {
    'no-new-func': 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': ['error', {
      argsIgnorePattern: 'next|resolve|reject'
    }],
    'arrow-parens': ['error', 'as-needed'],
    'comma-dangle': [
      'error',
      {
        arrays: 'never',
        objects: 'never',
        imports: 'never',
        exports: 'never',
        functions: 'never'
      }
    ],
    'max-len': [
      'error',
      120,
      2,
      {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true
      }
    ],
    'prefer-destructuring': [
      'error',
      {
        AssignmentExpression: {
          array: false
        }
      }
    ],
    'prefer-arrow-callback': 'error',
    'semi': 0
  },
  parserOptions: {
    "parser": "babel-eslint",
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "modules": true
    }
  }
}
