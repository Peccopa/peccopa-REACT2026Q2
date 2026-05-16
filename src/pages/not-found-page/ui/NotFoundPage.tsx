import { Link } from 'react-router-dom';

import { Text } from '@/shared';

import { TEXTS } from '../config/texts';
import styles from './NotFoundPage.module.css';

export function NotFoundPage() {
  return (
    <main className={styles.notFound}>
      <Text variant="h2" size="xxl">
        {TEXTS.heading}
      </Text>
      <Text color="muted">{TEXTS.description}</Text>
      <Link to="/">{TEXTS.link}</Link>
    </main>
  );
}
