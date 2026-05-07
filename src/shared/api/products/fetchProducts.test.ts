import { describe, it, expect, vi } from 'vitest';

describe('fetchProducts router', () => {
  it('uses mock when config.useMock = true', async () => {
    vi.resetModules();

    vi.doMock('@/shared/config/env', () => ({
      config: { useMock: true },
    }));

    const mockFn = vi.fn(() => Promise.resolve('mock-result'));
    const apiFn = vi.fn(() => Promise.resolve('api-result'));

    vi.doMock('./products.mock.api', () => ({
      fetchProductsMock: mockFn,
    }));

    vi.doMock('./products.api', () => ({
      fetchProductsApi: apiFn,
    }));

    const { fetchProducts } = await import('./fetchProducts');

    const res = await fetchProducts({
      search: '',
      limit: 10,
      skip: 0,
    });

    expect(mockFn).toHaveBeenCalled();
    expect(apiFn).not.toHaveBeenCalled();
    expect(res).toBe('mock-result');
  });

  it('uses api when config.useMock = false', async () => {
    vi.resetModules();

    vi.doMock('@/shared/config/env', () => ({
      config: { useMock: false },
    }));

    const mockFn = vi.fn();
    const apiFn = vi.fn(() => Promise.resolve('api-result'));

    vi.doMock('./products.mock.api', () => ({
      fetchProductsMock: mockFn,
    }));

    vi.doMock('./products.api', () => ({
      fetchProductsApi: apiFn,
    }));

    const { fetchProducts } = await import('./fetchProducts');

    const res = await fetchProducts({
      search: '',
      limit: 10,
      skip: 0,
    });

    expect(apiFn).toHaveBeenCalled();
    expect(mockFn).not.toHaveBeenCalled();
    expect(res).toBe('api-result');
  });
});
