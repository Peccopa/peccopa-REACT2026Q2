import styles from './LoadIndicator.module.css';

import { TEXTS } from './LoadIndicator.texts';

export function LoadIndicator() {
  return (
    <div className={styles.wrapper} role="status" aria-live="polite">
      <div className={styles.spinner} />
      <div className={styles.text}>{TEXTS.loadIndicator}</div>
    </div>
  );
}
