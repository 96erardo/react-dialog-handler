/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

module.exports = {
  roots: ['<rootDir>/__tests__'],
  transform: {
    "\\.[jt]sx?$": ["babel-jest", { configFile: './__tests__/babel.config.json' }]
  },
  testRegex: '^.*\.(test|spec)\.(t|j)s$',
};
