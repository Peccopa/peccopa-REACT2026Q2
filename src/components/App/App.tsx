import styles from '@/App.module.css';

import { Component } from 'react';

class App extends Component {
  state = {
    search: '',
    products: [],
    loading: false,
    error: null,
  };

  render() {
    return (
      <div className={styles.heading}>
        Rolling Scopes School - React Course 2026Q2
      </div>
    );
  }
}

export default App;
