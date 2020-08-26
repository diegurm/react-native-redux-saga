import React from 'react';
import { useSelector } from 'react-redux';

import navigation from '../../../services/navigation';
import ProductItemVertical from '../../ProductItem/ProductItemVertical';
import { List, ListItem } from './styles';

const ProductListVertical = () => {
  const { items, loading } = useSelector((state) => state.products);

  return (
    <>
      {loading ? (
        <List
          data={[...Array(4).keys()]}
          keyExtractor={(_, index) => index.toString()}
          renderItem={() => (
            <ListItem>
              <ProductItemVertical loading={true} />
            </ListItem>
          )}
        />
      ) : (
        <List
          data={items}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => String(item.id)}
          renderItem={({ item }) => (
            <ListItem
              onPress={() =>
                navigation.navigate('ProductDetail', {
                  productId: item.id,
                })
              }>
              <ProductItemVertical data={item} loading={false} />
            </ListItem>
          )}
        />
      )}
    </>
  );
};

export default React.memo(ProductListVertical);
