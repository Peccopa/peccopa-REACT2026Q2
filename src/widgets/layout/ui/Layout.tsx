import type { Props } from './Layout.types';

import { Component } from 'react';

import styles from './Layout.module.css';

export class Layout extends Component<Props> {
  render() {
    return (
      <div className={`${styles.layout} ${this.props.className || ''}`}>
        {this.props.children}
      </div>
    );
  }
}
