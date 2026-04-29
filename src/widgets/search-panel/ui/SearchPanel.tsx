import type { Props, State, Store } from './SearchPanel.types';

import { Component } from 'react';
import { SearchForm } from '@/features/search';
import { storage } from '@/shared/lib/localStorage';
import { STORE_KEY } from '@/shared';
import { fetchProducts } from '@/shared/api';

export class SearchPanel extends Component<Props, State> {
  state: State = {
    value: '',
  };

  getStore = (): Store => {
    return storage.get<Store>(STORE_KEY, { search: '' });
  };

  componentDidMount(): void {
    const store = this.getStore();
    this.setState({
      value: store.search ?? '',
    });
  }

  handleChange = (value: string) => {
    this.setState({ value });
  };

  handleSearch = () => {
    const trimmed = this.state.value.trim();
    if (!trimmed) return;

    const store = {
      ...this.getStore(),
      search: trimmed,
    };

    storage.set(STORE_KEY, store);

    fetchProducts({
      search: trimmed,
      limit: 10,
      skip: 0,
    }).then((products) => {
      this.props.onSearch(products);
    });
  };

  render() {
    return (
      <SearchForm
        value={this.state.value}
        onChange={this.handleChange}
        onSearch={this.handleSearch}
      />
    );
  }
}
