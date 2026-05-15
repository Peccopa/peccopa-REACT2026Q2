import type { Product } from '@/shared/api/products/products.types';
import type { ProductsResponse } from '@/shared/api/products/products.types';

import { Component } from 'react';
import { Footer, Header, Layout, SearchPanel } from '@/widgets';
import { ErrorButton } from '@/features';
import { ResultsPanel } from '@/widgets/results-panel';

import { TEXTS } from '../config/texts';
import styles from './SearchPage.module.css';

interface State {
  products: Product[] | [];
  isLoading: boolean;
  isError: boolean;
  shouldCrash: boolean;
}

export class SearchPage extends Component {
  state: State = {
    products: [],
    isLoading: false,
    isError: false,
    shouldCrash: false,
  };

  handleSimulateError = () => {
    this.setState({ shouldCrash: true });
  };

  handleSearch = (products: ProductsResponse) => {
    this.setState({ products: products.products });
  };

  handleLoading = (isLoading: boolean) => {
    this.setState({ isLoading });
  };

  handleError = (isError: boolean) => {
    this.setState({ isError });
  };

  render() {
    if (this.state.shouldCrash) throw new Error(TEXTS.simulateError.error);

    return (
      <Layout>
        <div className={styles.top}>
          <Header />
          <div className={styles.controls}>
            <SearchPanel
              onSearch={this.handleSearch}
              onLoading={this.handleLoading}
              onError={this.handleError}
            />
            <ErrorButton onClick={this.handleSimulateError} />
          </div>
        </div>
        <ResultsPanel
          products={this.state.products}
          isLoading={this.state.isLoading}
          isError={this.state.isError}
        />

        <Footer />
      </Layout>
    );
  }
}
