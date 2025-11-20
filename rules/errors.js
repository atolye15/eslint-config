export default {
  rules: {
    // Disallow assignment in conditional expressions
    // https://eslint.org/docs/latest/rules/no-cond-assign
    'no-cond-assign': ['error', 'always'],

    // Disallow use of console
    // https://eslint.org/docs/latest/rules/no-console
    'no-console': 'error',

    // Disallow function or variable declarations in nested blocks
    // https://eslint.org/docs/rules/no-inner-declarations
    'no-inner-declarations': 'error',

    // Disallow returning values from Promise executor functions
    // https://eslint.org/docs/rules/no-promise-executor-return
    'no-promise-executor-return': 'error',

    // Disallow template literal placeholder syntax in regular strings
    // https://eslint.org/docs/rules/no-template-curly-in-string
    'no-template-curly-in-string': 'error',

    // Disallow loops with a body that allows only one iteration
    // https://eslint.org/docs/rules/no-unreachable-loop
    'no-unreachable-loop': [
      'error',
      {
        ignore: [], // WhileStatement, DoWhileStatement, ForStatement, ForInStatement, ForOfStatement
      },
    ],

    // Disallow use of optional chaining in contexts where the undefined value is not allowed
    // https://eslint.org/docs/rules/no-unsafe-optional-chaining
    'no-unsafe-optional-chaining': ['error', { disallowArithmeticOperators: true }],
  },
};
