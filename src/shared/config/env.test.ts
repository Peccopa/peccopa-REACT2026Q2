import { describe, expect, test } from 'vitest';
import { config } from './env';

describe('config', () => {
  test('should contain useMock flag', () => {
    expect(config.useMock).toBe(false);
  });
});
