import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import { Card, Divider, Caption, Button, useTheme } from 'react-native-paper';
import ImageView from 'react-native-image-viewing';
import Icon from 'react-native-vector-icons/MaterialIcons';

import * as CartActions from '../../store/modules/cart/actions';
import * as ProductActions from '../../store/modules/product/actions';
import { formatPrice } from '../../utils/format';
import ImageList from '../../components/ImageList';
import {
  Container,
  ProductWrapper,
  ProductTitle,
  ProductBrand,
  ProductPrice,
  AddButton,
  AddButtonText,
  ProductAmount,
  ProductAmountText,
  Amount,
  AmountText,
  AmountButton,
} from './styles';

const ProductDetail = ({ navigation, route }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [productId] = useState(route.params?.productId);
  const { loading, sizeSelect, ...product } = useSelector(
    (state) => state.product,
  );

  const [currentImageIndex, setImageIndex] = useState(0);
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  const amount = useSelector((state) =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;

      return sumAmount;
    }, {}),
  );

  const loadings = useSelector((state) =>
    state.cart.reduce((arr, product) => {
      arr[product.id] = product.loading;

      return arr;
    }, {}),
  );

  const handleAddProduct = (id) => {
    dispatch(CartActions.addToCartRequest(id));
  };

  // const handleIncrement = (product) => {
  //   dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  // };

  // const handleDecrement = (product) => {
  //   dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  // };

  useEffect(() => {
    if (productId) dispatch(ProductActions.getProduct(productId));
  }, [productId]);

  return (
    <Container>
      {loading ? (
        <View style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator size={64} />
        </View>
      ) : (
        <ScrollView>
          <Card style={{ marginBottom: 15 }}>
            <ImageList
              images={product?.photos}
              onPress={(index) => {
                setImageIndex(index);
                setIsVisibleModal(true);
              }}
              shift={0.25}
            />
            <ImageView
              images={product?.photos.map((image) => ({ uri: image }))}
              imageIndex={currentImageIndex}
              presentationStyle="overFullScreen"
              visible={isVisibleModal}
              onRequestClose={() => setIsVisibleModal(false)}
            />
            <Divider />
            <ProductWrapper>
              <ProductTitle color={theme.colors.text}>
                {product?.name}
              </ProductTitle>
              <ProductBrand color={theme.colors.text}>
                {product?.brand}
              </ProductBrand>

              <ProductPrice color={theme.colors.primary}>
                {formatPrice(product?.price)}
              </ProductPrice>
            </ProductWrapper>
            <Divider />

            <View
              style={{
                display: 'flex',
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                flexWrap: 'wrap',
                margin: 8,
              }}>
              {product?.sizes.map((size) => (
                <Button
                  mode={sizeSelect === size ? 'contained' : 'text'}
                  onPress={() => dispatch(ProductActions.setSize(size))}
                  style={{
                    marginHorizontal: 4,
                  }}
                  key={size}>
                  <Text>{size}</Text>
                </Button>
              ))}
            </View>

            {/* <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Amount>
                <AmountButton onPress={() => handleDecrement(product)}>
                  <Icon
                    name="remove-circle-outline"
                    size={24}
                    color={theme.colors.primary}
                  />
                </AmountButton>
                <AmountButton>
                  <AmountText> {amount[product.id] || 0}</AmountText>
                </AmountButton>

                <AmountButton onPress={() => handleIncrement(product)}>
                  <Icon
                    name="add-circle-outline"
                    size={24}
                    color={theme.colors.primary}
                  />
                </AmountButton>
              </Amount>
              <Caption style={{ textAlign: 'center', marginTop: 8 }}>
                7 itens disponíveis
              </Caption>
            </View> */}

            <Divider />

            <AddButton
              color={theme.colors.primary}
              onPress={() =>
                !loadings[product.id] && handleAddProduct(product.id)
              }>
              <ProductAmount>
                {loadings[product.id] ? (
                  <ActivityIndicator color="#FFF" size={20} />
                ) : (
                  <>
                    <Icon name="add-shopping-cart" color="#FFF" size={20} />
                    <ProductAmountText>
                      {amount[product.id] || ''}
                    </ProductAmountText>
                  </>
                )}
              </ProductAmount>
              <AddButtonText>ADICIONAR AO CARRINHO</AddButtonText>
            </AddButton>
          </Card>
        </ScrollView>
      )}
    </Container>
  );
};

export default ProductDetail;
