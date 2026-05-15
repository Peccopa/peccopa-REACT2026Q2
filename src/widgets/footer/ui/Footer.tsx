import { Text } from '@/shared';

import { TEXTS } from '../config/texts';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <Text variant="p" className={styles.item} size="sm" color="muted">
          {'Course:'}
          <a
            href="https://rs.school/courses/reactjs"
            target="_blank"
            rel="noreferrer"
          >
            {TEXTS.course}
          </a>
        </Text>
        <Text variant="p" className={styles.item} size="sm" color="muted">
          {'Author:'}
          <a href="https://github.com/Peccopa" target="_blank" rel="noreferrer">
            {TEXTS.name}
          </a>
        </Text>
      </div>

      <Text variant="span" size="sm" color="muted">
        {TEXTS.year}
      </Text>
    </footer>
  );
}
