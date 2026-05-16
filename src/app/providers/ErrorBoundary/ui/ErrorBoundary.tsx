import { Component } from 'react';
import { Button } from '@/shared';
import { Text } from '@/shared';

import styles from './ErrorBoundary.module.css';
import { TEXTS } from '../config/texts';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

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
        <main className={styles.errorBoundary}>
          <Text variant="h1" size="xxl">
            {TEXTS.errorBoundary.title}
          </Text>
          <Button onClick={this.reset}>{TEXTS.errorBoundary.retry}</Button>
        </main>
      );
    }

    return this.props.children;
  }
}
