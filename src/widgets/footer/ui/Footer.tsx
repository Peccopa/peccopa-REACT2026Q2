import { Text } from '@/shared';

import { TEXTS } from '../config/texts';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <Text variant="p" className={styles.item}>
          {'Course:'}
          <a
            href="https://rs.school/courses/reactjs"
            target="_blank"
            rel="noreferrer"
          >
            {TEXTS.course}
          </a>
        </Text>
        <Text variant="p" className={styles.item}>
          {'Author:'}
          <a href="https://github.com/Peccopa" target="_blank" rel="noreferrer">
            {TEXTS.name}
          </a>
        </Text>
      </div>

      <Text variant="span" size="sm">
        {TEXTS.year}
      </Text>
    </footer>
  );
}
