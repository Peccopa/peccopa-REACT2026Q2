import { describe, it, expect, vi } from 'vitest';

vi.mock('@/shared/api', () => ({
  fetchProducts: vi.fn(() =>
    Promise.resolve({
      products: [],
      total: 0,
      skip: 0,
      limit: 0,
    })
  ),
}));

import { render, screen, waitFor } from '@/shared/lib/test-utils';
import App from './App';

describe('App', () => {
  it('renders SearchPage inside ErrorBoundary', async () => {
    render(<App />);

    await waitFor(() => {
      expect(screen.getByRole('textbox')).toBeInTheDocument();
    });
  });
});
