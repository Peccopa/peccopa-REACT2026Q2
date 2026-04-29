import type { ProductsResponse } from '@/shared/api/products/products.types';

export type State = {
  value: string;
};

export type Store = {
  search: string;
};

export type Props = {
  onSearch: (products: ProductsResponse) => void;
};
