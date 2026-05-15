import { Text } from '@/shared';

import { TEXTS } from '../config/texts';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <Text variant="h1" size="xxl">
        {TEXTS.title}
      </Text>
    </header>
  );
}
