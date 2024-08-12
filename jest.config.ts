import type {Config} from 'jest';

const config: Config = {
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  setupFiles: [
    '<rootDir>/__mocks__/libMocks.js',
    '<rootDir>/__mocks__/react-native-splash-screen.js',
  ],
  preset: 'react-native',
  transformIgnorePatterns: [],
};

export default config;
