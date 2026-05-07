import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, userEvent, waitFor } from '@/shared/lib/test';

import { SearchPanel } from './SearchPanel';

import { fetchProducts } from '@/shared/api';

import { SEARCH_PAGE_LIMIT } from '../config/constants';
import { STORE_KEY } from '@/shared';

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

  it('calls fetchProducts with correct search params', async () => {
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

    vi.clearAllMocks();

    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button');

    await user.type(input, 'iphone');
    await user.click(button);

    expect(fetchProducts).toHaveBeenCalledWith({
      search: 'iphone',
      limit: SEARCH_PAGE_LIMIT,
      skip: 0,
    });
  });

  it('saves search term to localStorage after submit', async () => {
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

    vi.clearAllMocks();
    localStorage.clear();

    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button');

    await user.type(input, 'iphone');
    await user.click(button);

    const store = JSON.parse(localStorage.getItem(STORE_KEY) ?? '{}');

    expect(store.search).toBe('iphone');
  });

  it('calls onError when fetchProducts fails', async () => {
    const user = userEvent.setup();

    vi.mocked(fetchProducts).mockRejectedValue(new Error('API Error'));

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

    vi.clearAllMocks();

    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button');

    await user.type(input, 'iphone');
    await user.click(button);

    expect(onError).toHaveBeenCalledWith(true);
  });

  it('toggles loading state during search request', async () => {
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

    vi.clearAllMocks();

    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button');

    await user.type(input, 'iphone');
    await user.click(button);

    expect(onLoading).toHaveBeenCalledWith(true);

    await waitFor(() => {
      expect(onLoading).toHaveBeenCalledWith(false);
    });
  });
});
