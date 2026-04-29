import React, { Component } from 'react';
import { TEXTS } from '../config/texts';
import type { Props } from './SearchForm.types';

export class SearchForm extends Component<Props> {
  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onChange(event.target.value);
  };

  render() {
    return (
      <form>
        <input
          type="text"
          value={this.props.value}
          placeholder={TEXTS.searchForm.placeholder}
          onChange={this.handleChange}
        />
        <button type="submit">{TEXTS.searchForm.search}</button>
      </form>
    );
  }
}
