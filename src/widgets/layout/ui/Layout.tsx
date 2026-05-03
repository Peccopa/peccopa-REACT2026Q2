import { Component } from 'react';

import styles from './Layout.module.css';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export class Layout extends Component<Props> {
  render() {
    return (
      <div className={`${styles.layout} ${this.props.className || ''}`}>
        {this.props.children}
      </div>
    );
  }
}
