import { describe, it, expect } from 'vitest';
import { render, screen } from '@/shared/lib/test-utils';

import { ResultsPanel } from './ResultsPanel';

describe('ResultsPanel', () => {
  it('renders loading indicator', () => {
    render(<ResultsPanel products={[]} isLoading={true} isError={false} />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it('renders error message when isError is true', () => {
    render(<ResultsPanel products={[]} isLoading={false} isError={true} />);

    expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();
  });

  it('renders empty state when no products', () => {
    render(<ResultsPanel products={[]} isLoading={false} isError={false} />);

    expect(screen.getByText(/no results/i)).toBeInTheDocument();
  });

  it('renders products list', () => {
    const products = [
      {
        id: 1,
        title: 'iPhone',
        description: 'Apple phone',
      },
      {
        id: 2,
        title: 'Samsung',
        description: 'Android phone',
      },
    ];

    render(
      <ResultsPanel products={products} isLoading={false} isError={false} />
    );

    expect(screen.getByText('iPhone')).toBeInTheDocument();
    expect(screen.getByText('Samsung')).toBeInTheDocument();
    expect(screen.getByText('Apple phone')).toBeInTheDocument();
    expect(screen.getByText('Android phone')).toBeInTheDocument();
  });
});
