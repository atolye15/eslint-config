export default {
  rules: {
    // Disallow useless computed property keys
    // https://eslint.org/docs/rules/no-useless-computed-key
    'no-useless-computed-key': 'error',

    // Disallow renaming import, export, and destructured assignments to the same name
    // https://eslint.org/docs/rules/no-useless-rename
    'no-useless-rename': [
      'error',
      {
        ignoreDestructuring: false,
        ignoreImport: false,
        ignoreExport: false,
      },
    ],

    // Require let or const instead of var
    // https://eslint.org/docs/rules/no-var
    'no-var': 'error',

    // Require method and property shorthand syntax for object literals
    // https://eslint.org/docs/rules/object-shorthand
    'object-shorthand': [
      'error',
      'always',
      {
        ignoreConstructors: false,
        avoidQuotes: true,
      },
    ],

    // Suggest using of const declaration for variables that are never modified after declared
    // https://eslint.org/docs/rules/prefer-const
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: true,
      },
    ],

    // Disallow parseInt() in favor of binary, octal, and hexadecimal literals
    // https://eslint.org/docs/rules/prefer-numeric-literals
    'prefer-numeric-literals': 'error',

    // Use rest parameters instead of arguments
    // https://eslint.org/docs/rules/prefer-rest-params
    'prefer-rest-params': 'error',

    // Suggest using the spread syntax instead of .apply()
    // https://eslint.org/docs/rules/prefer-spread
    'prefer-spread': 'error',

    // Suggest using template literals instead of string concatenation
    // https://eslint.org/docs/rules/prefer-template
    'prefer-template': 'error',

    // Require a Symbol description
    // https://eslint.org/docs/rules/symbol-description
    'symbol-description': 'error',
  },
};
