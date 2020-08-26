import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import ProductList from '../../components/ProductList';
import { Container } from './styles';

const Produtcts = () => {
  const [loading, setLoading] = useState(true);
  const [layoutMode, setLayoutMode] = useState('vertical');
  const [searchText, setSearchText] = useState();
  const [products, setProducts] = useState([]);

  const loadData = async () => {
    setLoading(true);

    const { data } = await api.get('/products');
    setProducts([...data]);

    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Container>
      <>
        <ProductList
          key={'id'}
          mode={layoutMode}
          data={products}
          loading={loading}
        />
      </>
    </Container>
  );
};

export default Produtcts;
