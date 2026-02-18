# @atolye15/eslint-config

Atolye15 shareable config for ESLint.

Comprehensive ESLint configuration with built-in support for TypeScript, React, Next.js, Storybook, and Node.js. Includes optional presets for Jest and Vitest, automatic code formatting with Prettier, and best practices for modern JavaScript/TypeScript development.

## Available Presets

- **`base`**: Core ESLint rules with TypeScript support, import management, and Prettier integration
- **`react`**: React, JSX a11y, React Hooks, Testing Library, and Storybook configurations
- **`next`**: Next.js-specific rules (extends `react` preset with Core Web Vitals)
- **`jest`**: Jest-specific rules for test files
- **`vitest`**: Vitest-specific rules for test files (alternative to Jest preset)
- **`node`**: Node.js-specific rules and best practices
- **`storybook`**: Storybook-specific rules for story files

## Installation

```bash
yarn add -D @atolye15/eslint-config
```

This package requires the following peer dependencies to be installed in your project:

- ESLint `^9.39.0`
- TypeScript `^5.9.3`
- Prettier `^3.6.2`
- Jest `^30.2.0` (optional, only needed if using Jest preset)
- Storybook `^10.0.0` (optional, only needed if using Storybook preset)

## Usage

Create an `eslint.config.mjs` file in your project root and extend this configuration:

```javascript
import config from '@atolye15/eslint-config';

// Use a single preset
export default [...config.react];

// For Next.js projects
export default [...config.next];

// Add a testing preset (Jest or Vitest)
export default [
  ...config.react,
  ...config.jest,
];

// Or with Vitest
export default [
  ...config.react,
  ...config.vitest,
];

// Combine multiple presets
export default [
  ...config.base,
  ...config.jest,
  // Add your custom rules...
];
```

## Customizing Rules

You can override or extend the default configuration by adding your own rules:

```javascript
import config from '@atolye15/eslint-config';

export default [
  ...config.react,
  {
    files: ['**/*.tsx'],
    rules: {
      // other configs...
    }
  }
];
```

## Contributing

Issues and pull requests are welcome on [GitHub](https://github.com/atolye15/eslint-config).

## License

MIT © [Atolye15](https://github.com/atolye15)
