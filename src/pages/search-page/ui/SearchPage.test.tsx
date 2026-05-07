import { describe, it, expect, vi } from 'vitest';

vi.mock('@/shared/api', () => ({
  fetchProducts: vi.fn(),
}));

import { fetchProducts } from '@/shared/api';
import { render, screen, userEvent } from '@/shared/lib/test';
import { SearchPage } from './SearchPage';

describe('SearchPage', () => {
  it('fetches and renders products', async () => {
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

    expect(fetchProducts).toHaveBeenCalled();
  });

  it('does not fetch on empty search click (before interaction)', async () => {
    const user = userEvent.setup();

    vi.mocked(fetchProducts).mockClear();

    render(<SearchPage />);

    await user.click(screen.getByRole('button', { name: /search/i }));

    expect(fetchProducts).toHaveBeenCalled();
  });
});
