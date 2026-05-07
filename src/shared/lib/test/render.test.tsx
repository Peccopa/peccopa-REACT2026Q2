import { describe, expect, it } from 'vitest';
import { render } from './render';

describe('Render Test', () => {
  it('renders without ErrorBoundary wrapper', () => {
    const { container } = render(<div />, { withErrorBoundary: false });

    expect(container).toBeInTheDocument();
  });

  it('renders with ErrorBoundary wrapper', () => {
    const { container } = render(<div />, { withErrorBoundary: true });

    expect(container).toBeInTheDocument();
  });

  it('catches error when withErrorBoundary=true', () => {
    const Throw = () => {
      throw new Error('test');
    };

    const { getByText } = render(<Throw />, {
      withErrorBoundary: true,
    });

    expect(getByText(/something went wrong/i)).toBeInTheDocument();
  });
});
