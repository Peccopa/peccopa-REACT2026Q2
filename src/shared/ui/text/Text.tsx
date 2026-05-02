import type { Props } from './Text.types';

import { Component } from 'react';

import styles from './Text.module.css';

export class Text extends Component<Props> {
  render() {
    const {
      variant = 'p',
      size = 'md',
      color = 'default',
      className = '',
      children,
    } = this.props;

    const Tag = variant;

    return (
      <Tag
        className={[styles.text, styles[size], styles[color], className]
          .filter(Boolean)
          .join(' ')}
      >
        {children}
      </Tag>
    );
  }
}
