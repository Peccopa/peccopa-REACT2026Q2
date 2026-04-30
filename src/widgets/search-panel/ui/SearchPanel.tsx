import type { Props, State, Store } from './SearchPanel.types';

import { Component } from 'react';
import { SearchForm } from '@/features/search';
import { storage } from '@/shared/lib/localStorage';
import { STORE_KEY } from '@/shared';
import { fetchProducts } from '@/shared/api';
import { SEARCH_PAGE_LIMIT } from '../config/constants';

export class SearchPanel extends Component<Props, State> {
  private isFirstSearch = true;

  state: State = {
    value: '',
  };

  getStore = (): Store => {
    return storage.get<Store>(STORE_KEY, { search: '' });
  };

  componentDidMount(): void {
    const store = this.getStore();

    this.setState(
      {
        value: store.search ?? '',
      },
      () => this.handleSearch()
    );
  }

  handleChange = (value: string) => {
    this.setState({ value });
  };

  handleSearch = () => {
    const raw = this.state.value;
    const trimmed = raw.trim();

    const store = this.getStore();
    const prevSearch = store.search ?? '';

    if (raw !== trimmed) {
      this.setState({ value: trimmed });
    }

    if (!this.isFirstSearch && trimmed === prevSearch) {
      return;
    }

    this.isFirstSearch = false;

    storage.set(STORE_KEY, { ...store, search: trimmed });

    const hasSearch = trimmed.length > 0;

    fetchProducts({
      search: trimmed,
      limit: hasSearch ? SEARCH_PAGE_LIMIT : 0,
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
