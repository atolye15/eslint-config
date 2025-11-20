export default {
  rules: {
    // Forbid certain propTypes (any, array, object)
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
    'react/forbid-prop-types': [
      'error',
      {
        forbid: ['any', 'array', 'object'],
        checkContextTypes: true,
        checkChildContextTypes: true,
      },
    ],

    // Enforce boolean attributes notation in JSX
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
    'react/jsx-boolean-value': ['error', 'never', { always: [] }],

    // Validate JSX has key prop when in array or iterator
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
    'react/jsx-key': ['error', { checkFragmentShorthand: true }],

    // Prevent duplicate props in JSX
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
    'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],

    // Enforce PascalCase for user-defined JSX components
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
    'react/jsx-pascal-case': [
      'error',
      {
        allowAllCaps: true,
        ignore: [],
      },
    ],

    // Prevent usage of dangerous JSX properties
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-danger.md
    'react/no-danger': 'warn',

    // Prevent usage of setState in componentDidUpdate
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
    'react/no-did-update-set-state': 'error',

    // Prevent usage of setState in componentWillUpdate
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md
    'react/no-will-update-set-state': 'error',

    // Require ES6 class declarations over React.createClass
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
    'react/prefer-es6-class': ['error', 'always'],

    // Require stateless functions when not using lifecycle methods, setState or ref
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
    'react/prefer-stateless-function': ['error', { ignorePureComponents: true }],

    // Prevent extra closing tags for components without children
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
    'react/self-closing-comp': 'error',

    // Enforce component methods order
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
    'react/sort-comp': [
      'error',
      {
        order: [
          'static-variables',
          'static-methods',
          'instance-variables',
          'lifecycle',
          '/^handle.+$/',
          '/^on.+$/',
          'getters',
          'setters',
          '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
          'instance-methods',
          'everything-else',
          'rendering',
        ],
        groups: {
          lifecycle: [
            'displayName',
            'propTypes',
            'contextTypes',
            'childContextTypes',
            'mixins',
            'statics',
            'defaultProps',
            'constructor',
            'getDefaultProps',
            'getInitialState',
            'state',
            'getChildContext',
            'getDerivedStateFromProps',
            'componentWillMount',
            'UNSAFE_componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'UNSAFE_componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'UNSAFE_componentWillUpdate',
            'getSnapshotBeforeUpdate',
            'componentDidUpdate',
            'componentDidCatch',
            'componentWillUnmount',
          ],
          rendering: ['/^render.+$/', 'render'],
        },
      },
    ],

    // only .jsx and .tsx files may have JSX
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],

    // Prevent unused propType definitions
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
    'react/no-unused-prop-types': [
      'error',
      {
        customValidators: [],
        skipShapeProps: true,
      },
    ],

    // Require style prop value be an object or var
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
    'react/style-prop-object': 'error',

    // Prevent usage of Array index in keys
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
    'react/no-array-index-key': 'error',

    // Forbids using non-exported propTypes
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md
    // this is intentionally set to "warn". it would be "error",
    // but it's only critical if you're stripping propTypes in production.
    'react/forbid-foreign-prop-types': ['warn', { allowInPropTypes: true }],

    // Prevent void DOM elements from receiving children
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md
    'react/void-dom-elements-no-children': 'error',

    // Enforce all defaultProps have a corresponding non-required PropType
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/default-props-match-prop-types.md
    'react/default-props-match-prop-types': ['error', { allowRequiredDefaults: false }],

    // Prevent usage of shouldComponentUpdate when extending React.PureComponent
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-redundant-should-component-update.md
    'react/no-redundant-should-component-update': 'error',

    // Prevent unused state values
    // https://github.com/jsx-eslint/eslint-plugin-react/pull/1103/
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-state.md
    'react/no-unused-state': 'error',

    // Prevents common casing typos
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-typos.md
    'react/no-typos': 'error',

    // Enforce curly braces or disallow unnecessary curly braces in JSX props and/or children
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
    'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],

    // Prevent using this.state within a this.setState
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md
    'react/no-access-state-in-setstate': 'error',

    // Prevent this from being used in stateless functional components
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md
    'react/no-this-in-sfc': 'error',

    // Enforce shorthand or standard form for React fragments
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md
    'react/jsx-fragments': ['error', 'syntax'],

    // Prevent usage of `javascript:` URLs
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-script-url.md
    'react/jsx-no-script-url': [
      'error',
      [
        {
          name: 'Link',
          props: ['to'],
        },
      ],
    ],

    // Disallow unnecessary fragments
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md
    'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],

    // Enforce a specific function type for function components
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
    'react/function-component-definition': [
      'error',
      {
        namedComponents: ['function-declaration', 'function-expression'],
        unnamedComponents: 'function-expression',
      },
    ],

    // Enforce that namespaces are not used in React elements
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-namespace.md
    'react/no-namespace': 'error',

    // Prefer exact proptype definitions
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-exact-props.md
    'react/prefer-exact-props': 'error',

    // Lifecycle methods should be methods on the prototype, not class fields
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-arrow-function-lifecycle.md
    'react/no-arrow-function-lifecycle': 'error',

    // Prevent usage of invalid attributes
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-invalid-html-attribute.md
    'react/no-invalid-html-attribute': 'error',

    // Prevent declaring unused methods of component class
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-class-component-methods.md
    'react/no-unused-class-component-methods': 'error',

    // Disallow missing props validation in a React component definition
    // Since we are using TypeScript, we don't need this rule.
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prop-types.md
    'react/prop-types': 'off',
  },
};
