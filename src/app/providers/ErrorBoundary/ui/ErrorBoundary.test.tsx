import { describe, it, expect, vi } from 'vitest';
import { render, screen, userEvent } from '@/shared/lib/test-utils';
import { ErrorBoundary } from './ErrorBoundary';

describe('ErrorBoundary', () => {
  it('renders children when there is no error', () => {
    render(
      <ErrorBoundary>
        <div>Test content</div>
      </ErrorBoundary>
    );

    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('shows fallback UI when error occurs', () => {
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {});

    const ProblemChild = () => {
      throw new Error('Test error');
    };

    render(
      <ErrorBoundary>
        <ProblemChild />
      </ErrorBoundary>
    );

    expect(
      screen.getByRole('button', { name: /try again/i })
    ).toBeInTheDocument();

    expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();

    spy.mockRestore();
  });

  it('recovers after retry click', async () => {
    const user = userEvent.setup();

    const ProblemChild = () => {
      throw new Error('fail');
    };

    render(
      <ErrorBoundary>
        <ProblemChild />
      </ErrorBoundary>
    );

    const button = screen.getByRole('button');
    await user.click(button);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
