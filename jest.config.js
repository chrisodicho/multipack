module.exports = {
  collectCoverageFrom: ['packages/**/*.(ts|tsx)'],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
  testRegex: 'tests/.*\\.test\\.(ts|tsx)$',
  preset: 'ts-jest',
}
