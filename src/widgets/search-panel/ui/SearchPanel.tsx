import type { ProductsResponse } from '@/shared/api/products/products.types';

import { useEffect, useRef, useState } from 'react';

import { SearchForm } from '@/features/search';
import { searchService } from '../model/searchService';
import { useSearchController } from '../model/useSearchController';

interface Props {
  onSearch: (products: ProductsResponse) => void;
  onLoading: (value: boolean) => void;
  onError: (value: boolean) => void;
}

export function SearchPanel(props: Props) {
  const initialValue = searchService.getInitialValue();

  const [value, setValue] = useState(initialValue);

  const { runSearch } = useSearchController(props);

  const didInit = useRef(false);

  useEffect(() => {
    if (didInit.current) return;

    didInit.current = true;

    runSearch(initialValue);
  }, [runSearch, initialValue]);

  const handleChange = (value: string) => {
    setValue(value);
  };

  const handleSearch = () => {
    runSearch(value);
  };

  return (
    <SearchForm value={value} onChange={handleChange} onSearch={handleSearch} />
  );
}
