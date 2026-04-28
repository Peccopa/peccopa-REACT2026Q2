import { Component } from 'react';
import { ErrorBoundary } from '@/app/providers';
import SearchPage from '@/pages/search-page/SearchPage';

export default class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <SearchPage />
      </ErrorBoundary>
    );
  }
}
