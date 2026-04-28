import type { State } from './SearchPage.types';

import { Component } from 'react';

import { Layout } from '@/widgets';
import { ErrorButton } from '@/features';

export class SearchPage extends Component {
  state: State = {
    hasError: false,
  };

  handleSimulateError = () => {
    this.setState({ hasError: true });
  };

  render() {
    if (this.state.hasError) throw new Error('Simulated error');

    return (
      <Layout>
        <h1>Rolling Scopes School - React Course 2026Q2</h1>
        <ErrorButton onClick={this.handleSimulateError} />
      </Layout>
    );
  }
}
