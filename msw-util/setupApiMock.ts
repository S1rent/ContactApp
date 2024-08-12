import {mockServer} from './api-server';

beforeAll(() => {
  mockServer.listen({onUnhandledRequest: 'warn'});
});
afterEach(() => {
  mockServer.resetHandlers();
});

afterAll(() => mockServer.close());
