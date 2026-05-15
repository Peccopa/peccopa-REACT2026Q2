import { Route, Routes } from 'react-router-dom';

import { ErrorBoundary } from '@/app/providers';
import { SearchPage } from '@/pages';

export default function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<SearchPage />} />
      </Routes>
    </ErrorBoundary>
  );
}
