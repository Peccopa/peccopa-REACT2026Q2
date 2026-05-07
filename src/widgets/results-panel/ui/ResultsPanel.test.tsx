import { describe, it, expect } from 'vitest';
import { render, screen } from '@/shared/lib/test';

import { ResultsPanel } from './ResultsPanel';

describe('ResultsPanel', () => {
  it('renders loading indicator', () => {
    render(<ResultsPanel products={[]} isLoading={true} isError={false} />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });
});
