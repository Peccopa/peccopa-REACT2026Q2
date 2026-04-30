import { Component } from 'react';
import styles from './LoadIndicator.module.css';

export class LoadIndicator extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.spinner} />
        <div className={styles.text}>Loading...</div>
      </div>
    );
  }
}
