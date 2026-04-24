import { fetchProducts } from '@/api/productsApi';
import styles from './App.module.css';

import { Component } from 'react';

class App extends Component {
  state = {
    search: '',
    products: [],
    loading: false,
    error: null,
  };

  componentDidMount() {
    this.setState({ loading: true });

    fetchProducts('samsung', 10, 0)
      .then((data) => {
        this.setState({ products: data.products, loading: false });
        console.log(data);
      })
      .catch((error) => {
        this.setState({ error, loading: false });
      });
  }

  render() {
    return (
      <>
        <div className={styles.heading}>
          Rolling Scopes School - React Course 2026Q2
        </div>
      </>
    );
  }
}

export default App;
