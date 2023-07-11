/** @type {import('ts-jest').JestConfigWithTsJest} */

export default {
  // roots: ["<rootDir>/src"],
  preset: "ts-jest",
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["dist", ".d.ts", ".js", "src/config.ts"],
  resolver: "jest-ts-webcompat-resolver",
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/assetsMock.js",
    "\\.(css|scss)$": "identity-obj-proxy",
  },
  collectCoverageFrom: ["src/**/*.{ts,tsx}"],
  coveragePathIgnorePatterns: [
    "<rootDir>/src/main.tsx",
    "<rootDir>/src/vite-env.d.ts",
    "<rootDir>/src/components/form",
    "<rootDir>/src/config.ts",
    "<rootDir>/src/services/api.repository.ts",
    "<rootDir>/src/components/App.tsx",
  ],
};
