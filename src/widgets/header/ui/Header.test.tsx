import { describe, expect, it } from 'vitest';
import { screen } from '@testing-library/react';

import { render } from '@/shared/lib/test-utils';

import { Header } from './Header';
import { TEXTS } from '../config/texts';

describe('Header', () => {
  it('renders application title', () => {
    render(<Header />);

    expect(
      screen.getByRole('heading', {
        name: TEXTS.title,
      })
    ).toBeInTheDocument();
  });
});
