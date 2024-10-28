/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  preset: 'ts-jest', // Use ts-jest preset for TypeScript
  testEnvironment: 'node', // Set the test environment to Node
  transform: {
      '^.+\\.tsx?$': 'ts-jest', // Transform .ts and .tsx files using ts-jest
  },
  testPathIgnorePatterns: ['/node_modules/'], // Ignore node_modules when searching for test files
};
