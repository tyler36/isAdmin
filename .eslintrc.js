module.exports = {
    // JavaScript language options you want to support
    parserOptions: {
        allowImportExportEverywhere: true,
        ecmaVersion: '2018',
        sourceType: 'module'
    },


    // An environment defines global variables that are predefined
    env: {
        browser: true,
        es6:     true,
        node:    true,
        'jest/globals': true
    },

    // Set common globals to prevent "no-undef"
    globals: {
        Vue:        'readonly',
        expect:     'readonly',
        describe:   'readonly',
        it:         'readonly',
        beforeEach: 'readonly',
        afterEach:  'readonly',
        page:       'readonly',
        jestPuppeteer: 'readonly',
    },

    // ---- Additional plugins ----
    plugins: [
        'compat', // https://github.com/amilajack/eslint-plugin-compat
        'eslint-comments', // https://github.com/mysticatea/eslint-plugin-eslint-comments
        'filenames', // https://github.com/selaux/eslint-plugin-filenames
        'html', // https://github.com/BenoitZugmeyer/eslint-plugin-html
        'jest', // https://github.com/jest-community/eslint-plugin-jest
        'jsdoc', // https://github.com/gajus/eslint-plugin-jsdoc
        'json', // https://github.com/azeemba/eslint-plugin-json
        'markdown', // https://github.com/eslint/eslint-plugin-markdown
        'no-loops', // https://github.com/buildo/eslint-plugin-no-loops
        'promise', // https://github.com/xjamundx/eslint-plugin-promise
        'vue' // https://github.com/vuejs/eslint-plugin-vue
    ],

    extends: [
        'eslint:recommended',
        'plugin:compat/recommended',
        'plugin:eslint-comments/recommended',
        'plugin:jest/all',
        'plugin:jsdoc/recommended',
        "plugin:json/recommended-with-comments",
        'plugin:promise/recommended',
        'plugin:vue/recommended',
    ],


    /** ------------------------------------------------------------------
     *  Rule Descriptions can be found here: http://eslint.org/docs/rules/
     * ------------------------------------------------------------------
     */
    rules: {
        /** ------------------------------------------------------------------
         * PLUGIN:      eslint-comments (https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/)
         */
       'eslint-comments/disable-enable-pair': [ 'error', {
           'allowWholeFile': true
       } ],
       'eslint-comments/no-unused-disable': 'error',
       'eslint-comments/no-restricted-disable': 'error',

        /** ------------------------------------------------------------------
         * PLUGIN:      Filenames (https://github.com/selaux/eslint-plugin-filenames)
         */
        'filenames/match-regex': [ 'error', '^[a-z_]+|\.(?!(blade)$)$', true ], // Snake Case
        'filenames/match-exported': 'error',
        'filenames/no-index': 'error',

        /** ------------------------------------------------------------------
         * PLUGIN:      jest (https://github.com/jest-community/eslint-plugin-jest)
         */
        'jest/prefer-expect-assertions': 'off',
        'jest/no-hooks': 'off',
        'jest/no-expect-resolves': 'off',

        /** ------------------------------------------------------------------
         * PLUGIN:      jsdoc (https://github.com/gajus/eslint-plugin-jsdoc)
         */
        'jsdoc/require-description': [ 'error', {
            "descriptionStyle": "tag"
        } ],

        /** ------------------------------------------------------------------
         * PLUGIN:      no-loops (https://github.com/buildo/eslint-plugin-no-loops)
         */
        'no-loops/no-loops': 'error',

        /**
         * PLUGIN:      Promise (https://github.com/xjamundx/eslint-plugin-promise)
         */
        'promise/catch-or-return': [
            'error',
            {
                'allowThen': true,
                'terminationMethod': [ 'catch', 'finally' ],
            }
        ],
        'promise/prefer-await-to-then': 'off',
        'promise/prefer-await-to-callbacks': 'off',

        /**
         * PLUGIN:      Vue ( https://github.com/vuejs/eslint-plugin-vue )
         */
        'vue/script-indent': [ 'error', 4, {
            'baseIndent': 1
        } ],
        'vue/html-indent': [ 'error', 4 ],
        'vue/max-attributes-per-line': [
            'error', {
                'singleline': 2,
                'multiline': {
                    'max': 2,
                    'allowFirstLine': true
                }
            }
        ],
        'vue/multiline-html-element-content-newline': [ 'error', {
            'ignores': [ 'pre', 'textarea', 'template' ]
        } ],
        'vue/singleline-html-element-content-newline': [ 'error', {
            'ignoreWhenNoAttributes': true,
            'ignores': [ 'i' ]
        } ],
        'vue/component-name-in-template-casing': [ 'error', 'kebab-case' ],
        'vue/no-template-shadow': 'off',

        // ---- Possible Errors ----
        'no-await-in-loop': 'error',
        'no-console': [
            'error',
            {
                'allow': [
                    'warn',
                    'error'
                ]
            }
        ],
        'no-extra-parens': [ 'error', 'functions' ],
        'no-template-curly-in-string': 'error',

        /** ------------------------------------------------------------------
         * Best Practices
         */
        'accessor-pairs': 'error',
        'array-callback-return': 'error',
        'block-scoped-var': 'error',
        'class-methods-use-this': 'error',
        'complexity': 2,
        'consistent-return': 'error',
        'curly': 'error',
        'default-case': 'error',
        'dot-location': [ 'error', 'property' ],
        'dot-notation': 'error',
        'eqeqeq': 'error',
        'guard-for-in': 'error',
        'max-classes-per-file': [ 'error', 1 ],
        'no-alert': 'error',
        'no-caller': 'error',
        'no-case-declarations': 'error',
        'no-div-regex': 'error',
        'no-else-return': 'error',
        'no-empty-function': 'error',
        'no-empty-pattern': 'error',
        'no-eq-null': 'error',
        'no-eval': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'error',
        'no-extra-label': 'error',
        'no-fallthrough': 'error',
        'no-floating-decimal': 'error',
        'no-implicit-coercion': 'error',
        'no-implicit-globals': 'error',
        'no-implied-eval': 'error',
        'no-invalid-this': 'error',
        'no-iterator': 'error',
        'no-labels': 'error',
        'no-lone-blocks': 'error',
        'no-loop-func': 'error',
        'no-magic-numbers': [
            'warn',
            {
                'ignore': [
                    -1,
                    0,
                    1
                ],
                'ignoreArrayIndexes': true
            }
        ],
        'no-multi-spaces': [
            'error',
            {
                'ignoreEOLComments': true,
                'exceptions': {
                    'ImportDeclaration': true,
                    'VariableDeclarator': true
                }
            }
        ],
        'no-multi-str': 'error',
        'no-new': 'error',
        'no-new-func': 'error',
        'no-new-wrappers': 'error',
        'no-octal': 'error',
        'no-octal-escape': 'error',
        'no-param-reassign': 'error',
        'no-proto': 'error',
        'no-redeclare': 'error',
        'no-restricted-properties': 'error',
        'no-return-assign': 'error',
        'no-return-await': 'error',
        'no-script-url': 'error',
        'no-self-assign': 'error',
        'no-self-compare': 'error',
        'no-sequences': 'error',
        'no-throw-literal': 'error',
        'no-unmodified-loop-condition': 'error',
        'no-unused-expressions': 'error',
        'no-useless-call': 'error',
        'no-useless-catch': 'error',
        'no-useless-concat': 'error',
        'no-useless-escape': 'error',
        'no-useless-return': 'error',
        'no-void': 'error',
        /** Comments are automatically stripped from production so no need */
        'no-warning-comments': [
            'off',
            {
                'terms': [
                    'TODO',
                    'FIXME',
                ],
                'location': 'anywhere'
            }
        ],
        'no-with': 'error',
        // 'prefer-named-capture-group':   'error',
        'prefer-promise-reject-errors': 'error',
        'radix': [ 'error', 'as-needed' ],
        'require-await': 'error',
        'require-unicode-regexp': 'error',
        'vars-on-top': 'error',
        'wrap-iife': [ 'error', 'inside' ],
        'yoda': [ 'error', 'never' ],

        /** ------------------------------------------------------------------
         * Strict Mode
         */
        'strict': 'error',

        /** ------------------------------------------------------------------
         * Variables
         */
        'init-declarations': 'error',
        'no-delete-var': 'error',
        'no-label-var': 'error',
        'no-restricted-globals': 'error',
        'no-shadow': 'error',
        'no-shadow-restricted-names': 'error',
        'no-undef': 'error',
        'no-undef-init': 'error',
        'no-undefined': 'error',
        'no-unused-vars': 'error',
        'no-use-before-define': [
            'error',
            {
                'functions': false,
                'classes': true
            }
        ],

        /** ------------------------------------------------------------------
         * Node.js and CommonJS
         */
        'callback-return': 'error',
        'global-require': 'error',
        'handle-callback-err': [ 'error', '^(err|error|anySpecificError)$' ],
        'no-buffer-constructor': 'error',
        'no-mixed-requires': [
            'error',
            {
                'grouping': true,
                'allowCall': true
            }
        ],
        'no-new-require': 'error',
        'no-path-concat': 'error',
        'no-process-env': 'error',
        'no-process-exit': 'error',
        'no-restricted-modules': 'error',
        'no-sync': [
            'error',
            {
                allowAtRootLevel: true
            }
        ],

        /** ------------------------------------------------------------------
         * Stylistic Issues
         */
        'array-bracket-newline': 'off',
        'array-bracket-spacing': [ 'error', 'never' ],
        'array-element-newline': 'off',
        'block-spacing': [ 'error', 'never' ],
        'brace-style': [
            'error',
            '1tbs',
            {
                'allowSingleLine': true
            }
        ],
        'camelcase': [ 'error', {
            'properties': 'always'
        } ],
        'capitalized-comments': [
            'error',
            'always',
            {
                'ignoreConsecutiveComments': true,
                'ignoreInlineComments': true,
            }
        ],
        'comma-dangle': [ 'error', 'always-multiline' ],
        'comma-spacing': [
            'error',
            {
                'before': false,
                'after': true
            }
        ],
        'comma-style': [ 'error', 'last' ],
        'computed-property-spacing': [ 'error', 'never' ],
        'consistent-this': [ 'error', 'self' ],
        'eol-last': 'error',
        'func-call-spacing': 'error',
        'func-name-matching': 'error',
        'func-names': 'error',
        'func-style': [ 'error', 'expression' ],
        'function-paren-newline': [ 'error', ],
        'id-blacklist': 'error',
        'id-length': [ 'error' ],
        'id-match': 'off',
        'implicit-arrow-linebreak': [ 'error', 'beside' ],
        'indent': [
            'error',
            4,
            {
                'SwitchCase': 1
            }
        ],
        'jsx-quotes': [ 'error', 'prefer-single' ],
        'key-spacing': [
            'error',
            {
                'beforeColon': false,
                'afterColon': true,
                'mode': 'minimum',
                'align': 'value'
            }
        ],
        'keyword-spacing': [
            'error',
            {
                'before': true,
                'after': true
            }
        ],
        'line-comment-position': 'error',
        'linebreak-style': [ 'error', 'unix' ],
        'lines-around-comment': [
            'error',
            {
                'beforeBlockComment': false,
                'afterBlockComment': false,
                'beforeLineComment': false,
                'afterLineComment': false,
                'allowBlockStart': true,
                'allowBlockEnd': true,
                'allowObjectStart': true,
                'allowObjectEnd': true,
                'allowArrayStart': true,
                'allowArrayEnd': true
            }
        ],
        'lines-between-class-members': [ 'error', 'always' ],
        'max-depth': [ 'error', 3 ],
        'max-len': [
            'error',
            {
                'code': 120,
                'tabWidth': 4,
                'comments': 120,
                'ignoreTrailingComments': true,
                'ignoreUrls': true
            }
        ],
        'max-lines': [
            'error', {
                'skipBlankLines': true,
                'skipComments': true,
            }
        ],
        'max-lines-per-function': [ 'error', 50 ],
        'max-nested-callbacks': [ 'error', {
            'max': 3
        } ],
        'max-nested-callbacks': 'error',
        'max-params': [ 'error', 3 ],
        'max-statements': [ 'warn', 20 ],
        'max-statements-per-line': [ 'error', {
            'max': 1
        } ],
        'multiline-comment-style': 'error',
        'multiline-ternary': 'error',
        'new-cap': [
            'error',
            {
                'newIsCap': true,
                'newIsCapExceptions': [],
                'capIsNew': true,
                'capIsNewExceptions': [
                    'Array',
                    'Boolean',
                    'Date',
                    'Function',
                    'Object',
                    'Number',
                    'RegExp',
                    'String',
                    'Symbol'
                ],
                'properties': true
            }
        ],
        'new-parens': 'error',
        'newline-per-chained-call': [
            'error',
            {
                'ignoreChainWithDepth': 2
            }
        ],
        'no-array-constructor': 'error',
        'no-bitwise': 'error',
        'no-continue': 'error',
        'no-inline-comments': 'warn',
        'no-lonely-if': 'error',
        'no-mixed-operators': 'error',
        'no-multi-assign': 'error',
        'no-multiple-empty-lines': [ 'error', {
            'max': 2
        } ],
        'no-negated-condition': 'error',
        'no-nested-ternary': 'error',
        'no-new-object': 'error',
        'no-plusplus': [ 'off', {
            'allowForLoopAfterthoughts': true
        } ],
        'no-restricted-syntax': 'error',
        'no-tabs': 'error',
        'no-ternary': 'off',
        'no-trailing-spaces': 'error',
        'no-underscore-dangle': 'error',
        'no-unneeded-ternary': 'error',
        'no-whitespace-before-property': 'error',
        'nonblock-statement-body-position': 'error',
        'object-curly-newline': [ 'error', {
            'consistent': true
        } ],
        'object-curly-spacing': [ 'error', 'never' ],
        'object-property-newline': 'error',
        'one-var': 'off',
        'one-var-declaration-per-line': 'error',
        'operator-assignment': [ 'error', 'always' ],
        'operator-linebreak': [ 'error', 'before' ],
        'padded-blocks': [
            'error',
            {
                'blocks': 'never',
                'switches': 'never',
                'classes': 'never'
            }
        ],
        'padding-line-between-statements': 'error',
        'quote-props': [ 'error', 'as-needed' ],
        'quotes': [
            'error',
            'single',
            {
                'avoidEscape': true,
                'allowTemplateLiterals': true
            }
        ],
        'semi': [ 'error', 'always' ],
        'semi-spacing': [
            'error',
            {
                'before': false,
                'after': true
            }
        ],
        'semi-style': 'error',
        'sort-keys': [
            'error',
            'asc',
            {
                'caseSensitive': true,
                'natural': false
            }
        ],
        'sort-vars': [ 'error', {
            'ignoreCase': true
        } ],
        'space-before-blocks': [
            'error',
            {
                'functions': 'always',
                'keywords': 'always',
                'classes': 'always'
            }
        ],
        'space-before-function-paren': [
            'error',
            {
                'anonymous': 'always',
                'named': 'never'
            }
        ],
        'space-in-parens': [
            'error',
            'always',
            {
                'exceptions': []
            }
        ],
        'space-infix-ops': 'error',
        'space-unary-ops': [
            'error',
            {
                'words': true,
                'nonwords': false
            }
        ],
        'spaced-comment': [
            'error',
            'always',
            {
                'line': {
                    'markers': [
                        '/',
                        '//'
                    ],
                    'exceptions': [
                        '-',
                        '+'
                    ]
                },
                'block': {
                    'markers': [
                        '!'
                    ],
                    'exceptions': [
                        '*'
                    ]
                }
            }
        ],
        'switch-colon-spacing': 'error',
        'template-tag-spacing': 'error',
        'unicode-bom': [ 'error', 'never' ],
        'wrap-regex': 'error',

        /** ------------------------------------------------------------------
         * ECMAScript 6
         */
        'arrow-body-style': [ 'error', 'as-needed' ],
        'arrow-parens': [ 'error', 'as-needed' ],
        'arrow-spacing': [
            'error',
            {
                'before': true,
                'after': true
            }
        ],
        'generator-star-spacing': [
            'error',
            {
                'before': true,
                'after': false
            }
        ],
        'no-confusing-arrow': [ 'error', {
            'allowParens': true
        } ],
        'no-duplicate-imports': [ 'error', {
            'includeExports': true
        } ],
        'no-restricted-imports': 'error',
        'no-useless-computed-key': 'error',
        'no-useless-constructor': 'error',
        'no-useless-rename': 'error',
        'no-var': 'error',
        'object-shorthand': 'error',
        'prefer-arrow-callback': [
            'error',
            {
                'allowNamedFunctions': true,
                'allowUnboundThis': true
            }
        ],
        'prefer-const': 'off',
        'prefer-destructuring': [
            'error',
            {
                'array': true,
                'object': true,
            },
            {
                'enforceForRenamedProperties': false
            }
        ],
        'prefer-numeric-literals': 'error',
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'prefer-template': 'error',
        'rest-spread-spacing': 'error',
        'sort-imports': 'error',
        'symbol-description': 'error',
        'template-curly-spacing': [ 'error', 'never' ],
        'yield-star-spacing': [
            'error',
            {
                'before': true,
                'after': false
            }
        ]
    },

    /** ------------------------------------------------------------------
     * Overrides
     */
    'overrides': [
        /** INDENT allows plugin-vue to indent within script tags */
        /** SORT-KEYS allow plugin-vue to order */
        {
            'files': [ '*.vue' ],
            'rules': {
                'indent': 'off',
                'sort-keys': 0,
            }
        },
    ]
};
