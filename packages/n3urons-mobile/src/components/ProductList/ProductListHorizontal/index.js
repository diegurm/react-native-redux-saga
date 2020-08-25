import React from 'react';

import navigation from '../../../services/navigation';
import ProductItemHorizontal from '../../ProductItem/ProductItemHorizontal';
import { List, ListItem } from './styles';

const ProductListHorizontal = ({ data, loading, ...props }) => {
  return (
    <List
      {...props}
      data={data}
      keyExtractor={(item) => String(item.productId)}
      renderItem={({ item, index }) => (
        <>
          <ListItem
            onPress={() => {
              navigation.navigate('ProductDetail', {
                productId: item.productId,
              });
            }}>
            <ProductItemHorizontal data={item} loading={loading} />
          </ListItem>
        </>
      )}
    />
  );
};

export default React.memo(ProductListHorizontal);
