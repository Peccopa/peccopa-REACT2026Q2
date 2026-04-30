// fetchProducts.ts
import { config } from '@/shared/config/env';
import { fetchProductsMock } from './products.mock';
import { fetchProductsApi } from './products.api';
import type { ProductsRequest, ProductsResponse } from './products.types';

export function fetchProducts(
  params: ProductsRequest
): Promise<ProductsResponse> {
  console.log('fetchProducts');

  if (config.useMock) {
    return fetchProductsMock(params);
  }

  return fetchProductsApi(params);
}
