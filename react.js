import jsxA11y from 'eslint-plugin-jsx-a11y';
import reactPlugin from 'eslint-plugin-react';
import testingLibrary from 'eslint-plugin-testing-library';
import { defineConfig } from 'eslint/config';

import baseConfig from './base.js';
import storybookConfig from './storybook.js';

import reactA11y from './rules/react-a11y.js';
import reactHooks from './rules/react-hooks.js';
import react from './rules/react.js';

export default defineConfig([
  baseConfig,
  {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    ...reactPlugin.configs.flat.recommended,
  },
  {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    ...reactPlugin.configs.flat['jsx-runtime'],
  },
  {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    ...jsxA11y.flatConfigs.recommended,
  },
  {
    files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
    ...testingLibrary.configs['flat/dom'],
  },
  {
    files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
    ...testingLibrary.configs['flat/react'],
  },
  react,
  reactA11y,
  reactHooks,
  storybookConfig,
  {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
    rules: {
      'testing-library/no-node-access': [
        'error',
        {
          allowContainerFirstChild: true,
        },
      ],
    },
  },
]);
