import type { ButtonHTMLAttributes } from 'react';

import { Component } from 'react';
import styles from './Button.module.css';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export class Button extends Component<Props> {
  render() {
    const { children, className, ...rest } = this.props;

    return (
      <button
        className={[styles.button, className].filter(Boolean).join(' ')}
        {...rest}
      >
        {children}
      </button>
    );
  }
}
