import { render as rtlRender } from '@testing-library/react';
import type { ReactElement, ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';

import { ErrorBoundary } from '@/app/providers';

interface RenderOptions {
  withErrorBoundary?: boolean;
  initialEntries?: string[];
}

export function render(ui: ReactElement, options: RenderOptions = {}) {
  const { withErrorBoundary = false, initialEntries = ['/'] } = options;

  function Wrapper({ children }: { children: ReactNode }) {
    const content = withErrorBoundary ? (
      <ErrorBoundary>{children}</ErrorBoundary>
    ) : (
      children
    );

    return (
      <MemoryRouter initialEntries={initialEntries}>{content}</MemoryRouter>
    );
  }

  return rtlRender(ui, { wrapper: Wrapper });
}
