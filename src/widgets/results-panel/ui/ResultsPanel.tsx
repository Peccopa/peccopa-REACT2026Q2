import type { CSSProperties } from 'react';
import type { Product } from '@/shared/api/products/products.types';

import { LoadIndicator } from '@/shared/ui';
import { Text } from '@/shared/ui';

import styles from './ResultsPanel.module.css';
import { TEXTS } from '../config/texts';

interface CSSVars {
  [key: `--${string}`]: string | number;
}

interface StyleWithVars extends CSSProperties, CSSVars {}

interface Props {
  products: Product[];
  isLoading: boolean;
  isError: boolean;
}

const getStyle = (index: number): StyleWithVars => ({
  '--i': index,
});

export function ResultsPanel({ products, isLoading, isError }: Props) {
  if (isLoading) return <LoadIndicator />;

  if (isError) {
    return (
      <Text variant="h3" size="xl">
        {TEXTS.error}
      </Text>
    );
  }

  if (products.length === 0) {
    return (
      <Text variant="h3" size="xl">
        {TEXTS.results}
      </Text>
    );
  }

  return (
    <ul className={styles.products}>
      {products.map((product, index) => (
        <li key={product.id} className={styles.product} style={getStyle(index)}>
          <Text variant="h4" className={styles.productTitle}>
            {product.title}
          </Text>

          <Text className={styles.productDescription}>
            {product.description}
          </Text>
        </li>
      ))}
    </ul>
  );
}
