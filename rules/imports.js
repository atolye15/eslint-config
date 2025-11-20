export default {
  rules: {
    // ----------------------------------------------------
    // Static analysis:
    // ----------------------------------------------------

    // Do not allow a default import name to match a named export
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-as-default.md
    'import/no-named-as-default': 'error',

    // Forbid the use of extraneous packages
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-extraneous-dependencies.md
    // paths are treated both as absolute paths, and relative to process.cwd()
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'test?(s)/**', // tape, common npm pattern
          'spec/**', // mocha, rspec-like pattern
          '**/?(*.)@(spec|test).[jt]s?(x)', // common test files
          '**/?(*.)test-utils.[jt]s?(x)', // test utils
          '**/*.stories.[jt]s?(x)', // storybook stories
          '**/__tests__/**/*.[jt]s?(x)', // jest pattern
          '**/__mocks__/**/*.[jt]s?(x)', // jest pattern
          '**/jest.config.?(c|m)[jt]s', // jest config
          '**/jest.setup.?(c|m)[jt]s', // jest setup
          '**/webpack.config?(.*).?(c|m)[jt]s', // webpack config
          '**/rollup.config?(.*).?(c|m)[jt]s', // rollup config
          '**/eslint.config.?(c|m)[jt]s', // eslint config
          '**/postcss.config.?(c|m)[jt]s', // postcss config
        ],
        optionalDependencies: false,
      },
    ],

    // Forbids the use of mutable exports with var or let.
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-mutable-exports.md
    'import/no-mutable-exports': 'error',

    // ----------------------------------------------------
    // Module systems:
    // ----------------------------------------------------

    // Disallow AMD require/define
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-amd.md
    'import/no-amd': 'error',

    // ----------------------------------------------------
    // Style guide:
    // ----------------------------------------------------

    // Disallow non-import statements appearing before import statements
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/first.md
    'import/first': 'error',

    // Ensure consistent use of file extension within the import path
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/extensions.md
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],

    // Ensure absolute imports are above relative imports and that unassigned imports are ignored
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
    // TODO: enforce a stricter convention in module import order?
    'import/order': ['error', { groups: [['builtin', 'external', 'internal']] }],

    // Require a newline after the last import/require in a group
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/newline-after-import.md
    'import/newline-after-import': 'error',

    // Forbid import of modules using absolute paths
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-absolute-path.md
    'import/no-absolute-path': 'error',

    // Forbid require() calls with expressions
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-dynamic-require.md
    'import/no-dynamic-require': 'error',

    // Forbid Webpack loader syntax in imports
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-webpack-loader-syntax.md
    'import/no-webpack-loader-syntax': 'error',

    // Prevent importing the default as if it were named
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-default.md
    'import/no-named-default': 'error',

    // Forbid a module from importing itself
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-self-import.md
    'import/no-self-import': 'error',

    // Forbid cyclical dependencies between modules
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-cycle.md
    'import/no-cycle': ['error', { maxDepth: '∞' }],

    // Ensures that there are no useless path segments
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-useless-path-segments.md
    'import/no-useless-path-segments': ['error', { commonjs: true }],

    // Use this rule to prevent importing packages through relative paths.
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-relative-packages.md
    'import/no-relative-packages': 'error',

    //
    // These rules are recommended to be disabled within TypeScript projects
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/docs/linting/TROUBLESHOOTING.md#eslint-plugin-import

    // Warn on accessing default export property names that are also named exports
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-as-default-member.md
    'import/no-named-as-default-member': 'off',

    // Ensure imports point to files/modules that can be resolved
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unresolved.md
    // 'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],
    'import/no-unresolved': 'off',
  },
};
