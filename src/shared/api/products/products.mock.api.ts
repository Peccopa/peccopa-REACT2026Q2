import type { ProductsRequest, ProductsResponse } from './products.types';

import { mockProducts } from './products.mock.data';

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

export async function fetchProductsMock(
  params: ProductsRequest
): Promise<ProductsResponse> {
  await delay(1000);

  const { search, limit, skip } = params;

  const normalizedSearch = search.trim().toLowerCase();

  const filtered = normalizedSearch
    ? mockProducts.filter((p) =>
        p.title.toLowerCase().includes(normalizedSearch)
      )
    : mockProducts;

  const isAll = limit === 0;

  const paginated = isAll ? filtered : filtered.slice(skip, skip + limit);

  return {
    products: paginated,
    total: filtered.length,
    limit,
    skip,
  };
}
