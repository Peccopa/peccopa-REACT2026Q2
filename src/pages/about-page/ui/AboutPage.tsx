import { Footer, Layout } from '@/widgets';
import { Text } from '@/shared';

import { TEXTS } from '../config/texts';
import styles from './AboutPage.module.css';

export function AboutPage() {
  return (
    <Layout className={styles.about}>
      <Text variant="h1" size="xxl">
        {TEXTS.heading}
      </Text>
      <section>
        <Text variant="h2" size="lg">
          {TEXTS.title}
        </Text>
        <Text variant="p" className={styles.description}>
          {TEXTS.description}
        </Text>
      </section>
      <Footer />
    </Layout>
  );
}
