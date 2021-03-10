module.exports = {
    'env': {
        'commonjs': true,
        'es6': true,
        'node': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:security/recommended'
    ],
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parserOptions': {
        'ecmaVersion': 2020,
        'sourceType': 'module'
    },
    'rules': {
        'indent': ['error', 4],
        'no-multi-spaces': ['error'],
        'semi': ['error', 'always'],
        'quotes': ['error', 'single'],
        'brace-style': ['error', 'stroustrup', {'allowSingleLine': true}],
        'comma-dangle': ['error', 'never'],
        'no-unused-vars': ['warn'],
        'no-var': ['error'],
        'eqeqeq': ['error', 'always'],
        'arrow-parens': ['error', 'always'],
        'prefer-destructuring': ['error', {'object': true, 'array': false}],
        'object-curly-spacing': ['error', 'never'],
        'key-spacing': ['error', {'afterColon': true}],
        'comma-spacing': ['error', {'before': false, 'after': true}]
    }
};

// https://stackoverflow.com/questions/46562730/how-to-configure-eslint-with-nodejs-express-application
// https://eslint.org/docs/user-guide/getting-started
