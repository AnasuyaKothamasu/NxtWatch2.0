/** @type {import('jest').Config} */
const config = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy", // mocks CSS modules
  },
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest", // transform TS/TSX
  },
};

export default config;
