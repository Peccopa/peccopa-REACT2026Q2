import type { ProductsRequest, ProductsResponse } from './products.types';

import { mockProducts } from './mocks/products';

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

export async function fetchProductsMock(
  params: ProductsRequest
): Promise<ProductsResponse> {
  await delay(400);

  const { search, limit, skip } = params;

  const filtered = search.trim()
    ? mockProducts.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      )
    : mockProducts;

  return {
    products: filtered.slice(skip, skip + limit),
    total: filtered.length,
    limit,
    skip,
  };
}
