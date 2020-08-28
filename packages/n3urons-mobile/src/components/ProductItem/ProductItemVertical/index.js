import React from 'react';
import { Divider, useTheme } from 'react-native-paper';

import { formatPrice } from '../../../utils/format';
import {
  Product,
  ProductImage,
  ProductWrapper,
  ProductTitle,
  ProductPrice,
  ProductUnity,
  PlaceHolderImage,
  PlaceHolderTitle,
  PlaceHolderPrice,
} from './styles';

const ProductItemVertical = ({ data, loading }) => {
  const theme = useTheme();

  return (
    <>
      {loading ? (
        <>
          <Product>
            <PlaceHolderImage autoRun />
            <Divider />
            <ProductWrapper>
              <PlaceHolderTitle autoRun />
              <PlaceHolderTitle autoRun />
              <PlaceHolderPrice autoRun />
            </ProductWrapper>
          </Product>
        </>
      ) : (
        <>
          <Product color={theme.colors.surface}>
            <ProductImage source={{ uri: data?.photos[0] }} />
            <ProductWrapper>
              <ProductTitle color={theme.colors.text}>
                {data?.name}
              </ProductTitle>
              <ProductPrice color={theme.colors.primary}>
                {formatPrice(data?.price)}
              </ProductPrice>
            </ProductWrapper>
          </Product>
        </>
      )}
    </>
  );
};

export default React.memo(ProductItemVertical);
