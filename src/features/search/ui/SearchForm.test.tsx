import { describe, it, expect, vi } from 'vitest';
import { render, screen, userEvent } from '@/shared/lib/test';
import { SearchForm } from './SearchForm';

describe('SearchForm', () => {
  it('renders input and button', () => {
    const onChange = vi.fn();
    const onSearch = vi.fn();

    render(<SearchForm value="" onChange={onChange} onSearch={onSearch} />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('calls onChange with correct value when user types', async () => {
    const user = userEvent.setup();

    const onChange = vi.fn();
    const onSearch = vi.fn();

    render(<SearchForm value="" onChange={onChange} onSearch={onSearch} />);

    const input = screen.getByRole('textbox');

    await user.type(input, 'iphone');

    expect(onChange).toHaveBeenCalledWith('iphone');
  });
});
