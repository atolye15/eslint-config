import confusingBrowserGlobals from 'confusing-browser-globals';

export default {
  rules: {
    // Disallow labels that share a name with a variable
    // https://eslint.org/docs/rules/no-label-var
    'no-label-var': 'error',

    // Disallow specific globals
    // https://eslint.org/docs/rules/no-restricted-globals
    'no-restricted-globals': [
      'error',
      {
        name: 'isFinite',
        message:
          'Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite',
      },
      {
        name: 'isNaN',
        message:
          'Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan',
      },
    ].concat(
      confusingBrowserGlobals.map((g) => ({
        name: g,
        message: `Use window.${g} instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md`,
      })),
    ),

    // Disallow use of undefined when initializing variables
    // https://eslint.org/docs/rules/no-undef-init
    'no-undef-init': 'error',
  },
};
