module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      babelConfig: './jest/babel.config.js',
    },
  },
};
