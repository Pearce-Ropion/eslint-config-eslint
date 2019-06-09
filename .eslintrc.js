const eslintConfig = require('./index');

module.exports = {
    ...eslintConfig,
    extends: [
        'plugin:jest/recommended',
    ],
};
