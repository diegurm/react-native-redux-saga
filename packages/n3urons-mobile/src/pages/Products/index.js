import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

import * as ProductsActions from '../../store/modules/products/actions';
import ProductList from '../../components/ProductList';
import { Container, RadioView, RadioViewButton } from './styles';

const Produtcts = () => {
  const dispatch = useDispatch();
  const { layoutMode } = useSelector((state) => state.products);

  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = (query) => {
    console.log(query);
    setSearchQuery(query);
  };

  useEffect(() => {
    dispatch(ProductsActions.loadProducts(searchQuery));
  }, [searchQuery]);

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
          <RadioView>
            <RadioViewButton
              color="#333"
              actived={layoutMode === 'vertical'}
              onPress={() => {}}>
              <Icon
                name="view-module"
                size={24}
                color={layoutMode === 'vertical' ? '#FFF' : '#333'}
              />
            </RadioViewButton>
            <RadioViewButton
              color="#333"
              actived={layoutMode === 'horizontal'}
              onPress={() => {}}>
              <Icon
                name="view-list"
                size={24}
                color={layoutMode === 'horizontal' ? '#FFF' : '#333'}
              />
            </RadioViewButton>
          </RadioView>
          <Searchbar
            style={{ flex: 1 }}
            placeholder="Pesquisar..."
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        </View>

        <ProductList />
      </>
    </Container>
  );
};

export default Produtcts;
