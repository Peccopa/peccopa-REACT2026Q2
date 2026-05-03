import type { CSSProperties } from 'react';
import type { Product } from '@/shared/api/products/products.types';

import { Component } from 'react';
import { LoadIndicator } from '@/shared/ui';
import { Text } from '@/shared/ui';

import styles from './ResultsPanel.module.css';

interface CSSVars {
  [key: `--${string}`]: string | number;
}

interface StyleWithVars extends CSSProperties, CSSVars {}

interface Props {
  products: Product[];
  isLoading: boolean;
  isError: boolean;
}

export class ResultsPanel extends Component<Props> {
  getStyle = (index: number): StyleWithVars => ({
    '--i': index,
  });

  render() {
    const { products, isLoading, isError } = this.props;

    if (isLoading) return <LoadIndicator />;
    if (isError) return <h3>Something went wrong. Please try again.</h3>;
    if (products.length === 0) return <h3>No results</h3>;

    return (
      <ul className={styles.products}>
        {products.map((product, index) => (
          <li
            className={styles.product}
            key={product.id}
            style={this.getStyle(index)}
          >
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
}
