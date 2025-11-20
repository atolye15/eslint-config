export default {
  files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],

  rules: {
    // Require HTML element's lang prop to be valid
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/lang.md
    'jsx-a11y/lang': 'error',
  },
};
