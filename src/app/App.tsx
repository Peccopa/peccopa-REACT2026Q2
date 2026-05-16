import { Route, Routes } from 'react-router-dom';

import { ErrorBoundary } from '@/app/providers';
import { SearchPage } from '@/pages';
import { AboutPage } from '@/pages';
import { NotFoundPage } from '@/pages';
import { Layout } from '@/widgets';

export default function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<SearchPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </ErrorBoundary>
  );
}
