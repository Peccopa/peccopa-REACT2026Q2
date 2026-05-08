import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, userEvent, waitFor } from '@/shared/lib/test-utils';

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

  it('calls fetchProducts on submit', async () => {
    const user = userEvent.setup();

    vi.mocked(fetchProducts).mockResolvedValue({
      products: [],
      total: 0,
      skip: 0,
      limit: 0,
    });

    render(
      <SearchPanel onSearch={vi.fn()} onLoading={vi.fn()} onError={vi.fn()} />
    );

    await user.type(screen.getByRole('textbox'), 'iphone');
    await user.click(screen.getByRole('button'));

    await waitFor(() => {
      expect(fetchProducts).toHaveBeenCalled();
    });
  });

  it('calls fetchProducts with correct params', async () => {
    const user = userEvent.setup();

    vi.mocked(fetchProducts).mockResolvedValue({
      products: [],
      total: 0,
      skip: 0,
      limit: 0,
    });

    render(
      <SearchPanel onSearch={vi.fn()} onLoading={vi.fn()} onError={vi.fn()} />
    );

    await user.type(screen.getByRole('textbox'), 'iphone');
    await user.click(screen.getByRole('button'));

    await waitFor(() => {
      expect(fetchProducts).toHaveBeenCalledWith({
        search: 'iphone',
        limit: SEARCH_PAGE_LIMIT,
        skip: 0,
      });
    });
  });

  it('saves search to localStorage', async () => {
    const user = userEvent.setup();

    vi.mocked(fetchProducts).mockResolvedValue({
      products: [],
      total: 0,
      skip: 0,
      limit: 0,
    });

    render(
      <SearchPanel onSearch={vi.fn()} onLoading={vi.fn()} onError={vi.fn()} />
    );

    await user.type(screen.getByRole('textbox'), 'iphone');
    await user.click(screen.getByRole('button'));

    await waitFor(() => {
      const store = JSON.parse(localStorage.getItem(STORE_KEY) ?? '{}');
      expect(store.search).toBe('iphone');
    });
  });

  it('calls onError on failure', async () => {
    const user = userEvent.setup();

    vi.mocked(fetchProducts).mockRejectedValue(new Error('API Error'));

    const onError = vi.fn();

    render(
      <SearchPanel onSearch={vi.fn()} onLoading={vi.fn()} onError={onError} />
    );

    await user.type(screen.getByRole('textbox'), 'iphone');
    await user.click(screen.getByRole('button'));

    await waitFor(() => {
      expect(onError).toHaveBeenCalledWith(true);
    });
  });

  it('toggles loading state', async () => {
    const user = userEvent.setup();

    vi.mocked(fetchProducts).mockResolvedValue({
      products: [],
      total: 0,
      skip: 0,
      limit: 0,
    });

    const onLoading = vi.fn();

    render(
      <SearchPanel onSearch={vi.fn()} onLoading={onLoading} onError={vi.fn()} />
    );

    await user.type(screen.getByRole('textbox'), 'iphone');
    await user.click(screen.getByRole('button'));

    expect(onLoading).toHaveBeenCalledWith(true);

    await waitFor(() => {
      expect(onLoading).toHaveBeenCalledWith(false);
    });
  });

  it('trims input before search', async () => {
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

    await user.type(input, ' iphone ');
    await user.click(button);

    expect(fetchProducts).toHaveBeenCalledWith(
      expect.objectContaining({
        search: 'iphone',
      })
    );
  });

  it('calls fetchProducts with zero limit for empty search', async () => {
    const user = userEvent.setup();

    vi.mocked(fetchProducts).mockResolvedValue({
      products: [],
      total: 0,
      skip: 0,
      limit: 0,
    });

    render(
      <SearchPanel onSearch={vi.fn()} onLoading={vi.fn()} onError={vi.fn()} />
    );

    await user.click(screen.getByRole('button'));

    await waitFor(() => {
      expect(fetchProducts).toHaveBeenCalledWith({
        search: '',
        limit: 0,
        skip: 0,
      });
    });
  });

  it('does not refetch if search is same as previous', async () => {
    const user = userEvent.setup();

    vi.mocked(fetchProducts).mockResolvedValue({
      products: [],
      total: 0,
      skip: 0,
      limit: 0,
    });

    render(
      <SearchPanel onSearch={vi.fn()} onLoading={vi.fn()} onError={vi.fn()} />
    );

    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button');

    await user.type(input, 'iphone');
    await user.click(button);

    await waitFor(() => {
      expect(fetchProducts).toHaveBeenCalledTimes(2);
    });

    await user.click(button);

    await waitFor(() => {
      expect(fetchProducts).toHaveBeenCalledTimes(2);
    });
  });

  it('does not refetch when trimmed search equals previous search', async () => {
    const user = userEvent.setup();

    localStorage.setItem(STORE_KEY, JSON.stringify({ search: 'iphone' }));

    vi.mocked(fetchProducts).mockResolvedValue({
      products: [],
      total: 0,
      skip: 0,
      limit: 0,
    });

    render(
      <SearchPanel onSearch={vi.fn()} onLoading={vi.fn()} onError={vi.fn()} />
    );

    await waitFor(() => {
      expect(fetchProducts).toHaveBeenCalledTimes(1);
    });

    const button = screen.getByRole('button');

    await user.click(button);

    await waitFor(() => {
      expect(fetchProducts).toHaveBeenCalledTimes(1);
    });
  });

  it('uses empty string when store search is missing', async () => {
    vi.mocked(fetchProducts).mockResolvedValue({
      products: [],
      total: 0,
      skip: 0,
      limit: 0,
    });

    localStorage.setItem(STORE_KEY, JSON.stringify({}));

    render(
      <SearchPanel onSearch={vi.fn()} onLoading={vi.fn()} onError={vi.fn()} />
    );

    await waitFor(() => {
      expect(fetchProducts).toHaveBeenCalledWith({
        search: '',
        limit: 0,
        skip: 0,
      });
    });
  });
});
