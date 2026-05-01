import { Component } from 'react';
import styles from './LoadIndicator.module.css';
import { TEXTS } from './config/texts';

export class LoadIndicator extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.spinner} />
        <div className={styles.text}>{TEXTS.loadIndicator}</div>
      </div>
    );
  }
}
