import { Component } from 'react';
import { Button } from '@/shared';

import { TEXTS } from '../config/texts';

interface Props {
  onClick: () => void;
}

export class ErrorButton extends Component<Props> {
  render() {
    return (
      <Button onClick={this.props.onClick}>
        {TEXTS.errorBoundaryButton.error}
      </Button>
    );
  }
}
