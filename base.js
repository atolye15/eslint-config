import commentsConfigs from '@eslint-community/eslint-plugin-eslint-comments/configs';
import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

import bestPractices from './rules/best-practices.js';
import errors from './rules/errors.js';
import es6 from './rules/es6.js';
import imports from './rules/imports.js';
import strict from './rules/strict.js';
import style from './rules/style.js';
import typescript from './rules/typescript.js';

export default defineConfig([
  js.configs.recommended,
  tseslint.configs.recommended,
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  commentsConfigs.recommended,
  eslintPluginPrettierRecommended,
  imports,
  bestPractices,
  errors,
  es6,
  strict,
  style,
  typescript,
]);
