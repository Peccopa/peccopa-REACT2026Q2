import { fetchProducts } from '@/shared/api';
import { storage } from '@/shared/lib';
import { STORE_KEY } from '@/shared/config/constants';
import { SEARCH_PAGE_LIMIT } from '../config/constants';

interface Store {
  search: string;
}

interface SearchParams {
  value: string;
}

export const searchService = {
  async search({ value }: SearchParams) {
    const trimmed = value.trim();

    const store = storage.get<Store>(STORE_KEY, {
      search: '',
    });

    storage.set(STORE_KEY, {
      ...store,
      search: trimmed,
    });

    const hasSearch = trimmed.length > 0;

    const products = await fetchProducts({
      search: trimmed,
      limit: hasSearch ? SEARCH_PAGE_LIMIT : 0,
      skip: 0,
    });

    return products;
  },

  getInitialValue(): string {
    const store = storage.get<Store>(STORE_KEY, {
      search: '',
    });

    return store.search ?? '';
  },
};
