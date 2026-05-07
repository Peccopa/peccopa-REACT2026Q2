import { describe, it, expect, beforeEach, vi } from 'vitest';
import { storage } from './localStorage';

describe('storage', () => {
  beforeEach(() => {
    const store = new Map<string, string>();

    vi.stubGlobal('localStorage', {
      getItem: (key: string) => store.get(key) ?? null,

      setItem: (key: string, value: string) => {
        store.set(key, value);
      },

      removeItem: (key: string) => {
        store.set(key, undefined as unknown as string);
        store.delete(key);
      },

      clear: () => {
        store.clear();
      },
    });
  });

  it('set and get value', () => {
    storage.set('key', { a: 1 });

    const result = storage.get('key', { a: 0 });

    expect(result).toEqual({ a: 1 });
  });

  it('returns fallback if no value', () => {
    const result = storage.get('missing', 123);

    expect(result).toBe(123);
  });

  it('removes value', () => {
    storage.set('key', 1);
    storage.remove('key');

    const result = storage.get('key', 0);

    expect(result).toBe(0);
  });
});
