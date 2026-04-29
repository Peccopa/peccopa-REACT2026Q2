import type { State } from './SearchPage.types';

import { Component } from 'react';

import { Layout, SearchPanel } from '@/widgets';
import { ErrorButton } from '@/features';
import { TEXTS } from '../config/texts';
import type { ProductsResponse } from '@/shared/api/products/products.types';

export class SearchPage extends Component {
  state: State = {
    products: null,
    error: false,
  };

  handleSimulateError = () => {
    this.setState({ error: true });
  };

  handleSearch = (products: ProductsResponse) => {
    this.setState({ products }, () => console.log(this.state));
  };

  render() {
    if (this.state.error) throw new Error(TEXTS.simulateError.error);

    return (
      <Layout>
        <SearchPanel onSearch={this.handleSearch} />
        <ErrorButton onClick={this.handleSimulateError} />
      </Layout>
    );
  }
}
