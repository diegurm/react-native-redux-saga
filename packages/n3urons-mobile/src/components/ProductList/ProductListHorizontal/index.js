import React from 'react';
import { useSelector } from 'react-redux';

import navigation from '../../../services/navigation';
import ProductItemHorizontal from '../../ProductItem/ProductItemHorizontal';
import { List, ListItem } from './styles';

const ProductListHorizontal = () => {
  const { items, loading } = useSelector((state) => state.products);

  return (
    <List
      data={items}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item, index }) => (
        <ListItem
          onPress={() => {
            navigation.navigate('ProductDetail', {
              productId: item.id,
            });
          }}>
          <ProductItemHorizontal data={item} loading={loading} />
        </ListItem>
      )}
    />
  );
};

export default React.memo(ProductListHorizontal);
