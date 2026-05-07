import { describe, it, expect } from 'vitest';
import { fetchProductsMock } from './products.mock.api';
import { mockProducts } from './products.mock.data';

describe('products.mock.api', () => {
  it('returns all when search is empty', async () => {
    const res = await fetchProductsMock({
      search: '',
      limit: 0,
      skip: 0,
    });

    expect(res.products.length).toBe(mockProducts.length);
  });

  it('filters by search', async () => {
    const target = mockProducts[0];

    const res = await fetchProductsMock({
      search: target.title,
      limit: 10,
      skip: 0,
    });

    expect(res.products[0].title).toBe(target.title);
  });

  it('respects pagination', async () => {
    const res = await fetchProductsMock({
      search: '',
      limit: 1,
      skip: 1,
    });

    expect(res.products.length).toBe(1);
  });
});
