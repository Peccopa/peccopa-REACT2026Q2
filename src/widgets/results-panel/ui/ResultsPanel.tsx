import type { Props, StyleWithVars } from './ResultsPanel.types';

import { Component } from 'react';

import styles from './ResultsPanel.module.css';

export class ResultsPanel extends Component<Props> {
  getStyle = (index: number): StyleWithVars => ({
    '--i': index,
  });

  render() {
    const { products, isLoading, isError } = this.props;

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>{isError}</div>;
    if (products.length === 0) return <div>No results</div>;

    return (
      <ul className={styles.products}>
        {products.map((product, index) => (
          <li
            className={styles.product}
            key={product.id}
            style={this.getStyle(index)}
          >
            <h4 className={styles.productTitle}>{product.title}</h4>
            <p className={styles.productDescription}>{product.description}</p>
          </li>
        ))}
      </ul>
    );
  }
}
