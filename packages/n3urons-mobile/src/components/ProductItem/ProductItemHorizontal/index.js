import React from 'react';
import { useTheme } from 'react-native-paper';

import {
  Product,
  ProductImage,
  ProductWrapper,
  ProductTitle,
  ProdutcActions,
  ProductPrice,
  ProductUnity,
  ShoppingButton,
  ShoppingButtonIcon,
} from './styles';

const ProductItemHorizontal = ({ data }) => {
  const theme = useTheme();

  return (
    <Product>
      <ProductImage source={{ uri: data?.photos[0] }} />
      <ProductWrapper>
        <ProductTitle>{data?.name}</ProductTitle>
        <ProdutcActions>
          <ProductPrice color={theme.colors.primary}>
            {data?.price}
          </ProductPrice>
        </ProdutcActions>
      </ProductWrapper>
    </Product>
  );
};

export default ProductItemHorizontal;
