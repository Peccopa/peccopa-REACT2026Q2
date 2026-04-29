import type { ProductsResponse } from '@/shared/api/products/products.types';

export type State = {
  products: ProductsResponse | null;
  error: false;
};
