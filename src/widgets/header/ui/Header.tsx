import { Text } from '@/shared';

import { TEXTS } from '../config/texts';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <header className={styles.header}>
      <Text variant="h1" size="xxl">
        {TEXTS.title}
      </Text>
      <nav>
        <NavLink to="/">Search</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </header>
  );
}
