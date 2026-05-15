import type { ReactNode } from 'react';

import { Component } from 'react';

import styles from './Text.module.css';

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
type Size = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type Color = 'default' | 'primary' | 'muted' | 'accent';

interface Props {
  className?: string;
  variant?: Variant;
  size?: Size;
  color?: Color;
  children?: ReactNode;
}

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
