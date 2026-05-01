import type { Props } from './SearchForm.types';

import React, { Component } from 'react';
import { Button } from '@/shared';

import { TEXTS } from '../config/texts';
import styles from './SearchForm.module.css';

export class SearchForm extends Component<Props> {
  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onChange(event.target.value);
  };

  handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    this.props.onSearch();
  };

  render() {
    return (
      <form className={styles.searchForm} onSubmit={this.handleSubmit}>
        <input
          type="text"
          id="form-input"
          value={this.props.value}
          placeholder={TEXTS.searchForm.placeholder}
          onChange={this.handleChange}
        />
        <Button type="submit">{TEXTS.searchForm.search}</Button>
      </form>
    );
  }
}
