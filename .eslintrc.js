module.exports = {
    env: {
        browser: true
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:jest/recommended'
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12,
        sourceType: 'module'
    },
    plugins: [
        'react',
        'jest'
    ],
    rules: {
        'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['state'] }],
        'arrow-parens': [
            'error',
            'always'
        ],
        'arrow-body-style': [
            'error',
            'as-needed'
        ],
        'comma-dangle': [
            'error',
            'never'
        ],
        'brace-style': [
            'error',
            'stroustrup'
        ],
        curly: [
            'error',
            'all'
        ],
        'no-multiple-empty-lines': [
            'error',
            {
                max: 1,
                maxBOF: 0,
                maxEOF: 1
            }
        ],
        'no-shadow': 'off',
        'no-plusplus': 'off',
        'import/imports-first': 0,
        'import/newline-after-import': 0,
        'import/no-dynamic-require': 0,
        'import/no-extraneous-dependencies': 0,
        'import/no-named-as-default': 0,
        'import/no-unresolved': 2,
        'import/prefer-default-export': 0,
        indent: [
            'error',
            4,
            {
                SwitchCase: 1
            }
        ],
        'generator-star-spacing': [
            'error',
            {
                before: true,
                after: true
            }
        ],
        'jsx-a11y/aria-props': 2,
        'jsx-a11y/heading-has-content': 0,
        'jsx-a11y/label-has-for': 0,
        'jsx-a11y/mouse-events-have-key-events': 2,
        'jsx-a11y/role-has-required-aria-props': 2,
        'jsx-a11y/role-supports-aria-props': 2,
        'max-len': 0,
        'newline-per-chained-call': 0,
        'no-confusing-arrow': 0,
        'no-console': 1,
        'no-use-before-define': 0,
        'prefer-template': 2,
        'class-methods-use-this': 0,
        'react/forbid-prop-types': 0,
        'react/jsx-first-prop-new-line': [
            'error',
            'multiline'
        ],
        'react/jsx-filename-extension': 0,
        'react/jsx-no-target-blank': 0,
        'react/require-extension': 0,
        'react/require-default-props': 1,
        'react/self-closing-comp': 0,
        'react/jsx-indent': [
            'error',
            4
        ],
        'react/jsx-indent-props': [
            'error',
            4
        ],
        'react/sort-comp': [
            'error',
            {
                order: [
                    'static-methods',
                    'lifecycle',
                    'everything-else'
                ]
            }
        ],
        'require-yield': 0,
        'import/no-webpack-loader-syntax': 0
    }
};
