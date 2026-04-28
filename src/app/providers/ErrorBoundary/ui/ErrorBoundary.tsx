import type { Props, State } from './ErrorBoundary.types';

import { Component } from 'react';

import { TEXTS } from '../config/texts';
import { Layout } from '@/widgets';

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    console.error(error);
  }

  reset = () => this.setState({ hasError: false });

  render() {
    if (this.state.hasError) {
      return (
        <Layout>
          <h1>{TEXTS.errorBoundary.title}</h1>
          <button onClick={this.reset}>{TEXTS.errorBoundary.retry}</button>
        </Layout>
      );
    }

    return this.props.children;
  }
}
