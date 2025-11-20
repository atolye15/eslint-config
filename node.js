import nodePlugin from 'eslint-plugin-n';
import { defineConfig } from 'eslint/config';

import baseConfig from './base.js';
import jestConfig from './jest.js';

export default defineConfig([
  baseConfig,
  jestConfig,
  nodePlugin.configs['flat/recommended'],
  {
    rules: {
      // Require require() calls to be placed at top-level module scope
      // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/global-require.md
      'n/global-require': 'error',

      // Enforce either Buffer or require("buffer").Buffer
      // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-global/buffer.md
      'n/prefer-global/buffer': 'error',

      // Disallow new operators with calls to require
      // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-new-require.md
      'n/no-new-require': 'error',

      // Disallow string concatenation with __dirname and __filename
      // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-path-concat.md
      'n/no-path-concat': 'error',

      // Disallow the use of process.exit()
      // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-process-exit.md
      'n/no-process-exit': 'off',

      // Disallow import declarations which import non-existence modules
      // Since we are using TypeScript, we don't need this rule. ts will report an error if you are importing a non-existent module.
      // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-missing-import.md
      'n/no-missing-import': 'off',

      // Prohibit default exports.
      // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-default-export.md
      'import/no-default-export': 'error',

      // Disallow dangling underscores in identifiers
      // https://eslint.org/docs/rules/no-underscore-dangle
      'no-underscore-dangle': [
        'error',
        {
          allow: ['__typename', '_id'],
          allowAfterThis: false,
          allowAfterSuper: false,
          enforceInMethodNames: true,
        },
      ],
    },
  },
]);
