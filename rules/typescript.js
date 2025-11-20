export default {
  files: ['**/*.ts?(x)'],
  rules: {
    // Enforce naming conventions for everything across a codebase.
    // https://typescript-eslint.io/rules/naming-convention/
    // The `@typescript-eslint/naming-convention` rule allows `leadingUnderscore` and `trailingUnderscore` settings. However, the existing `no-underscore-dangle` rule already takes care of this.
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
      },
      {
        selector: 'function',
        format: ['camelCase', 'PascalCase'],
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
    ],

    // Enforce default parameters to be last.
    // https://typescript-eslint.io/rules/default-param-last/
    'default-param-last': 'off',
    '@typescript-eslint/default-param-last': 'error',

    // Enforce dot notation whenever possible.
    // https://typescript-eslint.io/rules/dot-notation/
    'dot-notation': 'off',
    '@typescript-eslint/dot-notation': ['error', { allowKeywords: true }],

    // Disallow empty functions.
    // https://typescript-eslint.io/rules/no-empty-function/
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': [
      'error',
      {
        allow: ['arrowFunctions', 'functions', 'methods'],
      },
    ],

    // Disallow the use of eval()-like functions.
    // https://typescript-eslint.io/rules/no-implied-eval/
    'no-implied-eval': 'off',
    '@typescript-eslint/no-implied-eval': 'error',

    // Disallow function declarations that contain unsafe references inside loop statements.
    // https://typescript-eslint.io/rules/no-loop-func/
    'no-loop-func': 'off',
    '@typescript-eslint/no-loop-func': 'error',

    // Disallow variable declarations from shadowing variables declared in the outer scope.
    // https://typescript-eslint.io/rules/no-shadow/
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',

    // Require explicit return and argument types on exported functions' and classes' public class methods.
    // https://typescript-eslint.io/rules/explicit-module-boundary-types/
    '@typescript-eslint/explicit-module-boundary-types': [
      'error',
      {
        allowHigherOrderFunctions: true,
      },
    ],

    // Disallow unused variables.
    // https://typescript-eslint.io/rules/no-unused-vars/
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: true, argsIgnorePattern: '^_' },
    ],

    // Disallow the use of variables before they are defined.
    // https://typescript-eslint.io/rules/no-use-before-define/
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      { functions: true, classes: true, variables: true },
    ],

    // Disallow unnecessary constructors.
    // https://typescript-eslint.io/rules/no-useless-constructor/
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',

    // Disallow conditionals where the type is always truthy or always falsy.
    // https://typescript-eslint.io/rules/no-unnecessary-condition/
    '@typescript-eslint/no-unnecessary-condition': 'error',
  },
};
