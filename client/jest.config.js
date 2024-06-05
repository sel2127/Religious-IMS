module.exports = {
    transform: {
      '^.+\\.(js|jsx|mjs|cjs|ts|tsx)$': 'babel-jest',
    },
    moduleFileExtensions: ['js', 'jsx', 'json', 'node', 'mjs'],
    testEnvironment: 'jsdom',
  };