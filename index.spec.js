const eslintConfig = require('./index');

describe('ESLint Configuration', () => {

    it('specifies correct parser options', () => {
        expect(eslintConfig.parserOptions).toEqual({
            ecmaVersion: 2018,
            ecmaFeatures: expect.objectContaining({
                experimentalObjectRestSpread: true,
            }),
        });
    });

    it('loads in the correct environments', () => {
        expect(eslintConfig.env).toEqual({
            es6: true,
            node: true,
        });
    });

    it('exports eslint config', () => {
        expect(eslintConfig).toMatchSnapshot();
    });

});
