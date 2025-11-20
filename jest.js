import jest from 'eslint-plugin-jest';
import jestDom from 'eslint-plugin-jest-dom';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
    ...jest.configs['flat/recommended'],
    rules: {
      ...jest.configs['flat/recommended'].rules,
      ...jest.configs['flat/style'].rules,
    },
  },
  {
    files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
    ...jestDom.configs['flat/recommended'],
  },
]);
