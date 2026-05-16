import { Text } from '@/shared';

import { TEXTS } from '../config/texts';
import styles from './AboutPage.module.css';

export function AboutPage() {
  return (
    <main className={styles.about}>
      <Text variant="h2" size="xl">
        {TEXTS.heading}
      </Text>
      <Text variant="h3" size="lg" color="primary">
        {TEXTS.title}
      </Text>
      <Text variant="p" className={styles.description} color="muted">
        {TEXTS.description}
      </Text>
    </main>
  );
}
