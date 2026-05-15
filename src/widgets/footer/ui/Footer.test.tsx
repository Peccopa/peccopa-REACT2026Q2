import { describe, expect, it } from 'vitest';
import { screen } from '@testing-library/react';

import { render } from '@/shared/lib/test-utils';

import { Footer } from './Footer';
import { TEXTS } from '../config/texts';

describe('Footer', () => {
  it('renders course link', () => {
    render(<Footer />);

    expect(
      screen.getByRole('link', {
        name: TEXTS.course,
      })
    ).toBeInTheDocument();
  });

  it('renders author link', () => {
    render(<Footer />);

    expect(
      screen.getByRole('link', {
        name: TEXTS.name,
      })
    ).toBeInTheDocument();
  });

  it('renders year', () => {
    render(<Footer />);

    expect(screen.getByText(TEXTS.year)).toBeInTheDocument();
  });
});
