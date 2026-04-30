import type { Product } from '@/shared/api/products/products.types';

export type Props = {
  products: Product[];
  isLoading: boolean;
  isError: boolean;
};
