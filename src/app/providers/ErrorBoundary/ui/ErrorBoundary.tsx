import type { Props, State } from './ErrorBoundary.types';

import { Component } from 'react';
import { Layout } from '@/widgets';
import { Button } from '@/shared';

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
          <Button onClick={this.reset}>{TEXTS.errorBoundary.retry}</Button>
        </Layout>
      );
    }

    return this.props.children;
  }
}
