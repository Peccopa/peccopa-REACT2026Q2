import { Route, Routes } from 'react-router-dom';

import { ErrorBoundary } from '@/app/providers';
import { SearchPage } from '@/pages';
// import { AboutPage } from '@/pages';
// import { NotFoundPage } from '@/pages';

export default function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        {/* <Route path="/" element={<AboutPage />} /> */}
        {/* <Route path="/" element={<NotFoundPage />} /> */}
      </Routes>
    </ErrorBoundary>
  );
}
