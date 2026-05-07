import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, userEvent } from '@/shared/lib/test';

import { SearchPanel } from './SearchPanel';

import { fetchProducts } from '@/shared/api';

vi.mock('@/shared/api', () => ({
  fetchProducts: vi.fn(),
}));

describe('SearchPanel', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
  });

  it('calls fetchProducts on search submit', async () => {
    const user = userEvent.setup();

    vi.mocked(fetchProducts).mockResolvedValue({
      products: [],
      total: 0,
      skip: 0,
      limit: 0,
    });

    const onSearch = vi.fn();
    const onLoading = vi.fn();
    const onError = vi.fn();

    render(
      <SearchPanel
        onSearch={onSearch}
        onLoading={onLoading}
        onError={onError}
      />
    );

    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button');

    await user.type(input, 'iphone');
    await user.click(button);

    expect(fetchProducts).toHaveBeenCalled();
  });
});
