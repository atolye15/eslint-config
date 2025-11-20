export default {
  rules: {
    // Disallow strict mode directives, babel inserts `'use strict';` for us
    // https://eslint.org/docs/rules/strict
    strict: ['error', 'never'],
  },
};
