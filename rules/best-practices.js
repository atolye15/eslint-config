export default {
  rules: {
    // Enforces return statements in callbacks of array's methods
    // https://eslint.org/docs/rules/array-callback-return
    'array-callback-return': ['error', { allowImplicit: true }],

    // Treat var statements as if they were block scoped
    // https://eslint.org/docs/rules/block-scoped-var
    'block-scoped-var': 'error',

    // Specify curly brace conventions for all control statements
    // https://eslint.org/docs/rules/curly
    curly: ['error', 'multi-line'], // multiline

    // Require default case in switch statements
    // https://eslint.org/docs/rules/default-case
    'default-case': ['error', { commentPattern: '^no default$' }],

    // Enforce default clauses in switch statements to be last
    // https://eslint.org/docs/rules/default-case-last
    'default-case-last': 'error',

    // Require the use of === and !==
    // https://eslint.org/docs/rules/eqeqeq
    eqeqeq: 'error',

    // Require grouped accessor pairs in object literals and classes
    // https://eslint.org/docs/rules/grouped-accessor-pairs
    'grouped-accessor-pairs': 'error',

    // Make sure for-in loops have an if statement
    // https://eslint.org/docs/rules/guard-for-in
    'guard-for-in': 'error',

    // enforce a maximum number of classes per file
    // https://eslint.org/docs/rules/max-classes-per-file
    'max-classes-per-file': ['error', 1],

    // Disallow the use of alert, confirm, and prompt
    // https://eslint.org/docs/rules/no-alert
    // TODO: enable, semver-major
    'no-alert': 'warn',

    // Disallow use of arguments.caller or arguments.callee
    // https://eslint.org/docs/rules/no-caller
    'no-caller': 'error',

    // Disallow returning value in constructor
    // https://eslint.org/docs/rules/no-constructor-return
    'no-constructor-return': 'error',

    // Disallow else after a return in an if
    // https://eslint.org/docs/rules/no-else-return
    'no-else-return': ['error', { allowElseIf: false }],

    // Disallow use of eval()
    // https://eslint.org/docs/rules/no-eval
    'no-eval': 'error',

    // Disallow adding to native types
    // https://eslint.org/docs/rules/no-extend-native
    'no-extend-native': 'error',

    // Disallow unnecessary function binding
    // https://eslint.org/docs/rules/no-extra-bind
    'no-extra-bind': 'error',

    // Disallow Unnecessary Labels
    // https://eslint.org/docs/rules/no-extra-label
    'no-extra-label': 'error',

    // Disallow usage of __iterator__ property
    // https://eslint.org/docs/rules/no-iterator
    'no-iterator': 'error',

    // Disallow use of labels for anything other than loops and switches
    // https://eslint.org/docs/rules/no-labels
    'no-labels': ['error', { allowLoop: false, allowSwitch: false }],

    // Disallow unnecessary nested blocks
    // https://eslint.org/docs/rules/no-lone-blocks
    'no-lone-blocks': 'error',

    // Disallow use of multiline strings
    // https://eslint.org/docs/rules/no-multi-str
    'no-multi-str': 'error',

    // Disallow use of new operator when not part of the assignment or comparison
    // https://eslint.org/docs/rules/no-new
    'no-new': 'error',

    // Disallows creating new instances of String, Number, and Boolean
    // https://eslint.org/docs/rules/no-new-wrappers
    'no-new-wrappers': 'error',

    // Disallow use of octal escape sequences in string literals, such as
    // var foo = 'Copyright \251';
    // https://eslint.org/docs/rules/no-octal-escape
    'no-octal-escape': 'error',

    // Disallow reassigning function parameters
    // disallow parameter object manipulation except for specific exclusions
    // https://eslint.org/docs/rules/no-param-reassign.html
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'acc', // for reduce accumulators
          'accumulator', // for reduce accumulators
          'e', // for e.returnvalue
          'ctx', // for Koa routing
          'context', // for Koa routing
          'req', // for Express requests
          'request', // for Express requests
          'res', // for Express responses
          'response', // for Express responses
          '$scope', // for Angular 1 scopes
          'staticContext', // for ReactRouter context
        ],
      },
    ],

    // Disallow usage of __proto__ property
    // https://eslint.org/docs/rules/no-proto
    'no-proto': 'error',

    // Disallow certain object properties
    // https://eslint.org/docs/rules/no-restricted-properties
    'no-restricted-properties': [
      'error',
      {
        object: 'arguments',
        property: 'callee',
        message: 'arguments.callee is deprecated',
      },
      {
        object: 'global',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      },
      {
        object: 'self',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      },
      {
        object: 'window',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      },
      {
        object: 'global',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      },
      {
        object: 'self',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      },
      {
        object: 'window',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      },
      {
        property: '__defineGetter__',
        message: 'Please use Object.defineProperty instead.',
      },
      {
        property: '__defineSetter__',
        message: 'Please use Object.defineProperty instead.',
      },
      {
        object: 'Math',
        property: 'pow',
        message: 'Use the exponentiation operator (**) instead.',
      },
    ],

    // Disallow use of assignment in return statement
    // https://eslint.org/docs/rules/no-return-assign
    'no-return-assign': ['error', 'always'],

    // Disallow use of `javascript:` urls.
    // https://eslint.org/docs/rules/no-script-url
    'no-script-url': 'error',

    // Disallow comparisons where both sides are exactly the same
    // https://eslint.org/docs/rules/no-self-compare
    'no-self-compare': 'error',

    // Disallow use of comma operator
    // https://eslint.org/docs/rules/no-sequences
    'no-sequences': 'error',

    // Restrict what can be thrown as an exception
    // https://eslint.org/docs/rules/no-throw-literal
    'no-throw-literal': 'error',

    // Disallow useless string concatenation
    // https://eslint.org/docs/rules/no-useless-concat
    'no-useless-concat': 'error',

    // Disallow redundant return; keywords
    // https://eslint.org/docs/rules/no-useless-return
    'no-useless-return': 'error',

    // Disallow use of void operator
    // https://eslint.org/docs/rules/no-void
    'no-void': 'error',

    // Require using Error objects as Promise rejection reasons
    // https://eslint.org/docs/rules/prefer-promise-reject-errors
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],

    // Disallow use of the RegExp constructor in favor of regular expression literals
    // https://eslint.org/docs/rules/prefer-regex-literals
    'prefer-regex-literals': [
      'error',
      {
        disallowRedundantWrapping: true,
      },
    ],

    // Require use of the second argument for parseInt()
    // https://eslint.org/docs/rules/radix
    radix: 'error',

    // Requires to declare all vars on top of their containing scope
    // https://eslint.org/docs/rules/vars-on-top
    'vars-on-top': 'error',

    // Require or disallow Yoda conditions
    // https://eslint.org/docs/rules/yoda
    yoda: 'error',
  },
};
