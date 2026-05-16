import type { ButtonHTMLAttributes } from 'react';

import styles from './Button.module.css';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, className, ...rest }: Props) {
  return (
    <button
      className={[styles.button, className].filter(Boolean).join(' ')}
      {...rest}
    >
      {children}
    </button>
  );
}
