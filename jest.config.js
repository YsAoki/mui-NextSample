// jest.config.js
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

/** @type {import('jest').Config} */
const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testMatch: [
    '<rootDir>/src/components/**/*.test.{js,jsx,ts,tsx}',
    '<rootDir>/src/utils/**/*.test.{js,jsx,ts,tsx}',
    '<rootDir>/src/hooks/**/*.test.{js,jsx,ts,tsx}',
  ], // components,utils,hooks 配下のテストファイルのみ対象
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)