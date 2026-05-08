import { describe, it, expect, vi } from 'vitest';
import { fetchProductsApi } from './products.api';

describe('products.api', () => {
  it('builds url with search param', async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ ok: true }),
    });

    vi.stubGlobal('fetch', fetchMock);

    await fetchProductsApi({
      search: 'iphone',
      limit: 10,
      skip: 0,
    });

    const url = fetchMock.mock.calls[0][0] as string;

    expect(url).toContain('q=iphone');
    expect(url).toContain('limit=10');
    expect(url).toContain('skip=0');
  });

  it('throws on bad response', async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: false,
      status: 500,
    });

    vi.stubGlobal('fetch', fetchMock);

    await expect(
      fetchProductsApi({
        search: '',
        limit: 10,
        skip: 0,
      })
    ).rejects.toThrow('Failed to fetch products');
  });
});
