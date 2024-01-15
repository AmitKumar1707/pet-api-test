// jest.config.js
module.exports = {
  // other Jest configurations...
  testEnvironment: 'node',
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  testMatch: ['**/*.test.js'],
  setupFilesAfterEnv: ['jest-cucumber'],
};
