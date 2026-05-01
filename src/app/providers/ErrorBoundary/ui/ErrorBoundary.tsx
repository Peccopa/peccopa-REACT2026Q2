import { Component } from 'react';

import type { Props, State } from './ErrorBoundary.types';
import { Layout } from '@/widgets';
import styles from './ErrorBoundary.module.css';
import { TEXTS } from '../config/texts';

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
        <Layout className={styles.errorBoundary}>
          <h1>{TEXTS.errorBoundary.title}</h1>
          <button onClick={this.reset}>{TEXTS.errorBoundary.retry}</button>
        </Layout>
      );
    }

    return this.props.children;
  }
}
