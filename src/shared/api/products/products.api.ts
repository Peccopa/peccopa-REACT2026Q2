import type { ProductsRequest, ProductsResponse } from './products.types';
import { API_URL } from '@/shared';

export async function fetchProductsApi({
  search,
  limit,
  skip,
}: ProductsRequest): Promise<ProductsResponse> {
  const rawSearch = search.trim();
  const url = new URL(rawSearch ? `${API_URL}/search` : API_URL);

  url.searchParams.set('limit', String(limit));
  url.searchParams.set('skip', String(skip));

  if (rawSearch) {
    url.searchParams.set('q', rawSearch);
  }

  const response = await fetch(url.toString());

  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.status}`);
  }

  return response.json();
}
