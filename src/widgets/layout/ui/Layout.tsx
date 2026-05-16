import { Component } from 'react';
import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';

import styles from './Layout.module.css';
import { Outlet } from 'react-router-dom';

interface Props {
  // children: React.ReactNode;
  className?: string;
}

export class Layout extends Component<Props> {
  render() {
    return (
      <div className={`${styles.layout} ${this.props.className || ''}`}>
        <Header />
        <Outlet />
        <Footer />
      </div>
    );
  }
}
