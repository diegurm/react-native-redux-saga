import React from 'react';

import navigation from '../../../services/navigation';
import ProductItemVertical from '../../ProductItem/ProductItemVertical';
import { List, ListItem } from './styles';

const ProductListVertical = ({ data, loading, ...props }) => {
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
          {...props}
          data={data}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => String(item[props.key])}
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
