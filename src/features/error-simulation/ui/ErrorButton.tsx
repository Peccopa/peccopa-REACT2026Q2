import type { Props } from './ErrorButton.types';

import { Component } from 'react';

import { TEXTS } from '../config/texts';

export class ErrorButton extends Component<Props> {
  render() {
    return (
      <button onClick={this.props.onClick}>
        {TEXTS.errorBoundaryButton.error}
      </button>
    );
  }
}
