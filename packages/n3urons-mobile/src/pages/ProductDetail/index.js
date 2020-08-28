import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, ScrollView, ActivityIndicator } from 'react-native';
import { Card, Divider, useTheme } from 'react-native-paper';
import ImageView from 'react-native-image-viewing';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';
import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../utils/format';
import ImageList from '../../components/ImageList';
import {
  Container,
  ProductWrapper,
  ProductTitle,
  ProductPrice,
  AddButton,
  ProductAmount,
  ProductAmountText,
  AddButtonText,
} from './styles';

const ProductDetail = ({ navigation, route }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [productId] = useState(route.params?.productId);

  const [currentImageIndex, setImageIndex] = useState(0);
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState();

  const amount = useSelector((state) =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;

      return sumAmount;
    }, {}),
  );

  const loadData = async () => {
    setLoading(true);

    const { data } = await api.get(`/products/${productId}`);
    setProduct({ ...data });

    setLoading(false);
  };

  const handleAddProduct = (id) => {
    dispatch(CartActions.addToCartRequest(id));
  };

  useEffect(() => {
    loadData();
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

              <ProductPrice color={theme.colors.primary}>
                {formatPrice(product?.price)}
              </ProductPrice>
            </ProductWrapper>

            <AddButton
              color={theme.colors.primary}
              onPress={() => !product?.loading && handleAddProduct(product.id)}>
              <ProductAmount>
                {product?.loading ? (
                  <ActivityIndicator color="#FFF" size={20} />
                ) : (
                  <>
                    <Icon name="add-shopping-cart" color="#FFF" size={20} />
                    <ProductAmountText>
                      {amount[product.id] || 0}
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
