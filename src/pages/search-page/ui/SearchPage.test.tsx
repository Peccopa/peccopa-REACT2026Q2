import { describe, it, expect, vi } from 'vitest';
import { render, screen, userEvent, waitFor } from '@/shared/lib/test';
import { SearchPage } from './SearchPage';
import { fetchProducts } from '@/shared/api';

vi.mock('@/shared/api', () => ({
  fetchProducts: vi.fn(),
}));

describe('SearchPage', () => {
  it('renders UI', async () => {
    const user = userEvent.setup();

    vi.mocked(fetchProducts).mockResolvedValue({
      products: [],
      total: 0,
      skip: 0,
      limit: 0,
    });

    render(<SearchPage />);

    await user.type(screen.getByRole('textbox'), 'iphone');
    await user.click(screen.getByRole('button', { name: /search/i }));

    expect(fetchProducts).toHaveBeenCalled();
  });

  it('shows error boundary when crash is triggered', async () => {
    const user = userEvent.setup();

    vi.mocked(fetchProducts).mockResolvedValue({
      products: [],
      total: 0,
      skip: 0,
      limit: 0,
    });

    render(<SearchPage />, { withErrorBoundary: true });

    await user.click(screen.getByRole('button', { name: /simulate error/i }));

    expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();
  });

  it('renders results after search flow', async () => {
    const user = userEvent.setup();

    vi.mocked(fetchProducts).mockResolvedValue({
      products: [{ id: 1, title: 'iPhone', description: 'Apple phone' }],
      total: 1,
      skip: 0,
      limit: 10,
    });

    render(<SearchPage />);

    await user.type(screen.getByRole('textbox'), 'iphone');
    await user.click(screen.getByRole('button', { name: /search/i }));

    expect(screen.getByText('iPhone')).toBeInTheDocument();
  });

  it('toggles loading state during search', async () => {
    const user = userEvent.setup();

    vi.mocked(fetchProducts).mockImplementation(
      () =>
        new Promise((resolve) =>
          setTimeout(
            () =>
              resolve({
                products: [],
                total: 0,
                skip: 0,
                limit: 0,
              }),
            10
          )
        )
    );

    render(<SearchPage />);

    await user.type(screen.getByRole('textbox'), 'iphone');
    await user.click(screen.getByRole('button', { name: /search/i }));

    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
    });
  });

  it('handles error from search panel', async () => {
    const user = userEvent.setup();

    vi.mocked(fetchProducts).mockRejectedValue(new Error('API Error'));

    render(<SearchPage />);

    await user.type(screen.getByRole('textbox'), 'iphone');
    await user.click(screen.getByRole('button', { name: /search/i }));

    await waitFor(() => {
      expect(screen.getByText(/error/i)).toBeInTheDocument();
    });
  });

  it('shows no results message', async () => {
    const user = userEvent.setup();

    vi.mocked(fetchProducts).mockResolvedValue({
      products: [],
      total: 0,
      skip: 0,
      limit: 0,
    });

    render(<SearchPage />);

    await user.type(screen.getByRole('textbox'), 'iphone');
    await user.click(screen.getByRole('button', { name: /search/i }));

    expect(screen.getByText(/no results/i)).toBeInTheDocument();
  });

  it('shows error message when request fails', async () => {
    const user = userEvent.setup();

    vi.mocked(fetchProducts).mockRejectedValue(new Error('API Error'));

    render(<SearchPage />);

    await user.type(screen.getByRole('textbox'), 'iphone');
    await user.click(screen.getByRole('button', { name: /search/i }));

    await waitFor(() => {
      expect(screen.getByText(/error/i)).toBeInTheDocument();
    });
  });
});
