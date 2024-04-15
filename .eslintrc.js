module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:i18next/recommended'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
        'react-hooks'
    ],
    rules: {
        indent: [2, 4],
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/jsx-filename-extension': [2, { extensions: ['js', 'jsx', 'ts', 'tsx'] }],
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'no-unused-vars': 'warn',
        '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
        '@typescript-eslint/ban-ts-comment': 'warn',
        'no-console': 'warn',
        'react/display-name': 'warn',
        "i18next/no-literal-string": ['error', {
            ignoreAttribute: ['data-testid', 'to'],
        }],
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "error",
        "@typescript-eslint/no-var-requires" : "off",
        "@typescript-eslint/no-explicit-any" : "off",
        "react/no-array-index-key" : "error",
    },
    globals: {
        __IS_DEV__: true,
        __API__: true,
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
