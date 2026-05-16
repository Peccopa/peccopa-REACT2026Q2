import type { ProductsResponse } from '@/shared/api/products/products.types';

import { useCallback, useRef } from 'react';

import { searchService } from './searchService';

interface Props {
  onSearch: (products: ProductsResponse) => void;
  onLoading: (value: boolean) => void;
  onError: (value: boolean) => void;
}

export function useSearchController({ onSearch, onLoading, onError }: Props) {
  const lastSearch = useRef<string | null>(null);

  const runSearch = useCallback(
    async (value: string) => {
      const trimmed = value.trim();

      if (trimmed === lastSearch.current) {
        return;
      }

      lastSearch.current = trimmed;

      onLoading(true);

      try {
        const products = await searchService.search({
          value: trimmed,
        });

        onSearch(products);
        onError(false);
      } catch {
        onError(true);
      } finally {
        onLoading(false);
      }
    },
    [onSearch, onLoading, onError]
  );

  return {
    runSearch,
  };
}
