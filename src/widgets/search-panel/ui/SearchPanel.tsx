import type { State } from './SearchPanel.types';

import { Component } from 'react';
import { SearchForm } from '@/features/search';

export class SearchPanel extends Component {
  state: State = {
    value: '',
  };

  handleChange = (value: string) => {
    this.setState({ value });
  };

  handleSearch = () => {
    const trimmed = this.state.value.trim();
    if (!trimmed) return;

    console.log(trimmed);
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
