import { describe, it, expect } from 'vitest';
import { render, screen } from '@/shared/lib/test';
import { Input } from './Input';

describe('Input', () => {
  it('adds error class when error=true', () => {
    render(<Input error />);

    const input = screen.getByRole('textbox');

    expect(input.className).toMatch(/error/);
  });

  it('does not add error class when error=false', () => {
    render(<Input />);

    const input = screen.getByRole('textbox');

    expect(input.className).not.toMatch(/error/);
  });
});
