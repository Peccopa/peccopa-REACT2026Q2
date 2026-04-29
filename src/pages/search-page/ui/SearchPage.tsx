import type { State } from './SearchPage.types';

import { Component } from 'react';

import { Layout, SearchPanel } from '@/widgets';
import { ErrorButton } from '@/features';
import { TEXTS } from '../config/texts';

export class SearchPage extends Component {
  state: State = {
    error: false,
  };

  handleSimulateError = () => {
    this.setState({ error: true });
  };

  render() {
    if (this.state.error) throw new Error(TEXTS.simulateError.error);

    return (
      <Layout>
        <h1>Rolling Scopes School - React Course 2026Q2</h1>
        <SearchPanel />
        <ErrorButton onClick={this.handleSimulateError} />
      </Layout>
    );
  }
}
