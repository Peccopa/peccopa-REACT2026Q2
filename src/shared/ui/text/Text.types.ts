import type { ReactNode } from 'react';

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
type Size = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type Color = 'default' | 'muted' | 'accent';

export type Props = {
  className?: string;
  variant?: Variant;
  size?: Size;
  color?: Color;
  children: ReactNode;
};
