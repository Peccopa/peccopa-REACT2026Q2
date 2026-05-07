import { describe, it, expect, vi } from 'vitest';

vi.mock('@/shared/api/products/fetchProducts', () => ({
  fetchProducts: vi.fn(),
}));

import { render, screen, userEvent, waitFor } from '@/shared/lib/test';
import { SearchPage } from './SearchPage';
import { fetchProducts } from '@/shared/api/products/fetchProducts';

describe('SearchPage integration', () => {
  it('performs search and shows results', async () => {
    const user = userEvent.setup();

    vi.mocked(fetchProducts).mockResolvedValue({
      products: [{ id: 1, title: 'iPhone', description: 'Apple phone' }],
      total: 1,
      skip: 0,
      limit: 10,
    });

    render(<SearchPage />);

    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: /search/i });

    await user.type(input, 'iphone');
    await user.click(button);

    await waitFor(() => {
      expect(fetchProducts).toHaveBeenCalledWith({
        search: 'iphone',
        limit: expect.any(Number),
        skip: 0,
      });
    });

    expect(screen.getByText('iPhone')).toBeInTheDocument();
    expect(screen.getByText('Apple phone')).toBeInTheDocument();
  });
});
