import type { InputHTMLAttributes } from 'react';

import { Component } from 'react';

import styles from './Input.module.css';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export class Input extends Component<Props> {
  render() {
    const { className, error, ...rest } = this.props;

    return (
      <input
        className={[styles.input, error ? styles.error : '', className]
          .filter(Boolean)
          .join(' ')}
        {...rest}
      />
    );
  }
}
