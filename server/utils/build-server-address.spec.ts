import { expect, test } from 'vitest';
import { buildServerAddress } from './build-server-address';

test('Builds the server URL', () => {
  const serverAddress = buildServerAddress({
    protocol: 'http',
    host: 'example.com',
    port: 1234,
  });

  expect(serverAddress).toBe('http://example.com:1234');
});
