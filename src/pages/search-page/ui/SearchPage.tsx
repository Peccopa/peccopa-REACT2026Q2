import type {
  Product,
  ProductsResponse,
} from '@/shared/api/products/products.types';

import { useState } from 'react';

import { SearchPanel, ResultsPanel } from '@/widgets';
import { ErrorButton } from '@/features';

import { TEXTS } from '../config/texts';
import styles from './SearchPage.module.css';

export function SearchPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [shouldCrash, setShouldCrash] = useState(false);

  const handleSimulateError = () => {
    setShouldCrash(true);
  };

  const handleSearch = (products: ProductsResponse) => {
    setProducts(products.products);
  };

  const handleLoading = (value: boolean) => {
    setIsLoading(value);
  };

  const handleError = (value: boolean) => {
    setIsError(value);
  };

  if (shouldCrash) {
    throw new Error(TEXTS.simulateError.error);
  }

  return (
    <main className={styles.content}>
      <section className={styles.controlsWrapper}>
        <SearchPanel
          onSearch={handleSearch}
          onLoading={handleLoading}
          onError={handleError}
        />

        <ErrorButton onClick={handleSimulateError} />
      </section>

      <section className={styles.resultsWrapper}>
        <ResultsPanel
          products={products}
          isLoading={isLoading}
          isError={isError}
        />
      </section>
    </main>
  );
}
