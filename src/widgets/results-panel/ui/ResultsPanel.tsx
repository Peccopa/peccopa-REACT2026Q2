import type { Props } from './ResultsPanel.types';

import { Component } from 'react';

import styles from './ResultsPanel.module.css';

export class ResultsPanel extends Component<Props> {
  render() {
    const { products, isLoading, isError } = this.props;

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>{isError}</div>;
    if (products.length === 0) return <div>No results</div>;

    return (
      <ul className={styles.products}>
        {products.map((product) => (
          <li className={styles.product} key={product.id}>
            <h4 className={styles.productTitle}>{product.title}</h4>
            <p className={styles.productDescription}>{product.description}</p>
          </li>
        ))}
      </ul>
    );
  }
}
