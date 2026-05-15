import { describe, expect, it } from 'vitest';
import { screen } from '@testing-library/react';

import { render } from '@/shared/lib/test-utils';

import { NotFoundPage } from './NotFoundPage';
import { TEXTS } from '../config/texts';

describe('NotFoundPage', () => {
  it('renders heading', () => {
    render(<NotFoundPage />);

    expect(
      screen.getByRole('heading', {
        name: TEXTS.heading,
      })
    ).toBeInTheDocument();
  });

  it('renders description', () => {
    render(<NotFoundPage />);

    expect(screen.getByText(TEXTS.description)).toBeInTheDocument();
  });

  it('renders navigation link to home page', () => {
    render(<NotFoundPage />);

    expect(
      screen.getByRole('link', {
        name: TEXTS.link,
      })
    ).toHaveAttribute('href', '/');
  });
});
