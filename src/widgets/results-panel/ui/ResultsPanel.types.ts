import type { CSSProperties } from 'react';
import type { Product } from '@/shared/api/products/products.types';

export type Props = {
  products: Product[];
  isLoading: boolean;
  isError: boolean;
};

export type CSSVars = {
  [key: `--${string}`]: string | number;
};

export type StyleWithVars = CSSProperties & CSSVars;
