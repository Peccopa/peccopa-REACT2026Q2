import { Footer, Layout } from '@/widgets';
import { Text } from '@/shared';

import { TEXTS } from '../config/texts';

export function AboutPage() {
  return (
    <Layout>
      <Text variant="h1" size="xl">
        {TEXTS.heading}
      </Text>
      <Text variant="p">{TEXTS.description}</Text>
      <Footer />
    </Layout>
  );
}
