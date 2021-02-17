import React from 'react';
import { useTheme } from 'react-native-paper';

import { formatPrice } from '../../../utils/format';
import {
  Product,
  ProductImage,
  ProductWrapper,
  ProductTitle,
  ProductBrand,
  ProdutcActions,
  ProductPrice,
  ProductUnity,
  ShoppingButton,
  ShoppingButtonIcon,
} from './styles';

const ProductItemHorizontal = ({ data }) => {
  const theme = useTheme();

  return (
    <Product color={theme.colors.surface}>
      <ProductImage source={{ uri: data?.photos[0] }} />
      <ProductWrapper>
        <ProductTitle>{data?.name}</ProductTitle>
        <ProductBrand> {data?.brand}</ProductBrand>
        <ProdutcActions>
          <ProductPrice color={theme.colors.primary}>
            {formatPrice(data?.price)}
          </ProductPrice>
        </ProdutcActions>
      </ProductWrapper>
    </Product>
  );
};

export default ProductItemHorizontal;
