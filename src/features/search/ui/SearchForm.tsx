import React from 'react';
import { Button, Input } from '@/shared';

import { TEXTS } from '../config/texts';
import styles from './SearchForm.module.css';

interface Props {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
}

export function SearchForm({ value, onChange, onSearch }: Props) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch();
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <Input
        type="text"
        id="form-input"
        value={value}
        placeholder={TEXTS.searchForm.placeholder}
        onChange={handleChange}
      />
      <Button type="submit">{TEXTS.searchForm.search}</Button>
    </form>
  );
}
