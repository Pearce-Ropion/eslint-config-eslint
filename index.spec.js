const eslintConfig = require('./index');

describe('ESLint Configuration', () => {

    it('exports eslint config', () => {
        expect(eslintConfig).toMatchSnapshot();
    });

});
