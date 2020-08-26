import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import * as ProductsActions from '../../store/modules/products/actions';
import ProductList from '../../components/ProductList';
import { Container } from './styles';

const Produtcts = () => {
  const dispatch = useDispatch();

  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    dispatch(ProductsActions.loadProducts(searchText));
  }, []);

  return (
    <Container>
      <>
        <ProductList />
      </>
    </Container>
  );
};

export default Produtcts;
