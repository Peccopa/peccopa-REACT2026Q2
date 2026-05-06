import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@/shared/lib/test';
import { SearchForm } from './SearchForm';

describe('SearchForm', () => {
  it('renders input and button', () => {
    const onChange = vi.fn();
    const onSearch = vi.fn();

    render(<SearchForm value="" onChange={onChange} onSearch={onSearch} />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
