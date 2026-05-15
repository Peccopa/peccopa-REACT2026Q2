import { describe, expect, it } from 'vitest';
import { screen } from '@testing-library/react';

import { render } from '@/shared/lib/test-utils';

import { AboutPage } from './AboutPage';
import { TEXTS } from '../config/texts';

describe('AboutPage', () => {
  it('renders heading', () => {
    render(<AboutPage />);

    expect(
      screen.getByRole('heading', {
        name: TEXTS.heading,
      })
    ).toBeInTheDocument();
  });

  it('renders title', () => {
    render(<AboutPage />);

    expect(
      screen.getByRole('heading', {
        name: TEXTS.title,
      })
    ).toBeInTheDocument();
  });

  it('renders description', () => {
    render(<AboutPage />);

    expect(
      screen.getByText(/react functional components and hooks/i)
    ).toBeInTheDocument();
  });
});
