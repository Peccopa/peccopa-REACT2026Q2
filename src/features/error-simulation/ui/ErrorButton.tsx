import type { Props } from './ErrorButton.types';

import { Component } from 'react';
import { Button } from '@/shared';

import { TEXTS } from '../config/texts';

export class ErrorButton extends Component<Props> {
  render() {
    return (
      <Button onClick={this.props.onClick}>
        {TEXTS.errorBoundaryButton.error}
      </Button>
    );
  }
}
