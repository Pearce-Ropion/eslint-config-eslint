# Orcinuss's Eslint Config
Eslint Configuration for Orcinuss's NPM packages for code consistency and structure.

## Installation

1. Add eslint and thie package to your repository `yarn add eslint @orcinuss/eslint-config-eslint -D`
2. Create  an `.eslintrc.js` file at the root of your project
3. Add this package to the extends section of your `.eslintrc.js` file: [example](#example-eslintrc)
4. Add `"lint": "eslint --config ./.eslintrc.js --fix index.js lib/**/*.js"` executable script to your package.json scripts section

# Example Eslintrc

``` js
---
extends: [
    '@orcinuss/eslint',
]
```

# Included Options

This config already has the following keys present, so you don't need to repeat them

``` js
---
parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
        experimentalObjectRestSpread: true,
    },
},

env: {
    es6: true,
    node: true,
},
```

# Caveats

Here are some common rules in specific locations that you may need to add

1. Disable global requires for `index.js` and `*.spec.js` files: `'global-require': 'off'`
