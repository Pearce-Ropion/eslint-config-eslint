/* eslint-disable global-require */
module.exports = {
    parserOptions: {
        ecmaVersion: 2018,
    },
    env: {
        es6: true,
        node: true,
    },
    rules: {
        ...require('./lib/rules/variables'),
        ...require('./lib/rules/node'),
        ...require('./lib/rules/es6'),
        ...require('./lib/rules/errors'),
        ...require('./lib/rules/bestPractices'),
        ...require('./lib/rules/style'),
    },
};
