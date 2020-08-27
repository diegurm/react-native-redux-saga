import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View } from 'react-native';
import { Searchbar } from 'react-native-paper';

import * as ProductsActions from '../../store/modules/products/actions';
import ProductList from '../../components/ProductList';
import LayoutModeButton from '../../components/LayoutModeButton';
import { Container, LayoutMode } from './styles';

const Produtcts = () => {
  const dispatch = useDispatch();
  const { layoutMode } = useSelector((state) => state.products);

  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = () => {
    dispatch(ProductsActions.loadProducts(searchQuery));
  };

  useEffect(() => {
    dispatch(ProductsActions.loadProducts());
  }, []);

  return (
    <Container>
      <>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: '#FFF',
            padding: 16,
          }}>
          <LayoutMode>
            <LayoutModeButton mode="vertical" />
            <LayoutModeButton mode="horizontal" />
          </LayoutMode>
          <Searchbar
            style={{ flex: 1 }}
            placeholder="Pesquisar..."
            onChangeText={setSearchQuery}
            value={searchQuery}
            onSubmitEditing={onChangeSearch}
          />
        </View>

        <ProductList />
      </>
    </Container>
  );
};

export default Produtcts;
