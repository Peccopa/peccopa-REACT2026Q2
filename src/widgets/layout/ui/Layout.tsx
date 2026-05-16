import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';
import { Outlet } from 'react-router-dom';

import styles from './Layout.module.css';

interface Props {
  className?: string;
}

export function Layout({ className }: Props) {
  return (
    <div className={`${styles.layout} ${className || ''}`}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
