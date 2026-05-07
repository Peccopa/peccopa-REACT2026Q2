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

  it('calls onChange when typing', async () => {
    const user = userEvent.setup();

    const onChange = vi.fn();
    const onSearch = vi.fn();

    render(<SearchForm value="" onChange={onChange} onSearch={onSearch} />);

    const input = screen.getByRole('textbox');

    await user.type(input, 'iphone');

    expect(onChange).toHaveBeenCalled();
  });

  it('calls onSearch when form is submitted', async () => {
    const user = userEvent.setup();

    const onChange = vi.fn();
    const onSearch = vi.fn();

    render(<SearchForm value="" onChange={onChange} onSearch={onSearch} />);

    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button');

    await user.type(input, 'iphone');
    await user.click(button);

    expect(onSearch).toHaveBeenCalled();
  });
});
