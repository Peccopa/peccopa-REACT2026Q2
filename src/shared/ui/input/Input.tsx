import type { InputHTMLAttributes } from 'react';

import styles from './Input.module.css';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export function Input({ className, error, ...rest }: Props) {
  return (
    <input
      className={[styles.input, error && styles.error, className]
        .filter(Boolean)
        .join(' ')}
      {...rest}
    />
  );
}
