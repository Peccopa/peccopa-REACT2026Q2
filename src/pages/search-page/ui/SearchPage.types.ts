import type { Product } from '@/shared/api/products/products.types';

export type State = {
  products: Product[] | [];
  isLoading: boolean;
  isError: boolean;
  shouldCrash: boolean;
};
