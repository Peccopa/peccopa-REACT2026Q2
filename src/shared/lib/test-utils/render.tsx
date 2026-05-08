import { render as rtlRender } from '@testing-library/react';
import type { ReactElement, ReactNode } from 'react';
import { ErrorBoundary } from '@/app/providers';

interface RenderOptions {
  withErrorBoundary?: boolean;
}

export function render(ui: ReactElement, options: RenderOptions = {}) {
  const { withErrorBoundary = false } = options;

  function Wrapper({ children }: { children: ReactNode }) {
    return withErrorBoundary ? (
      <ErrorBoundary>{children}</ErrorBoundary>
    ) : (
      <>{children}</>
    );
  }

  return rtlRender(ui, { wrapper: Wrapper });
}
