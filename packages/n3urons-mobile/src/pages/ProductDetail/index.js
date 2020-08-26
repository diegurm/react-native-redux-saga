import React, { useEffect, useState } from 'react';
import { View, ScrollView, ActivityIndicator } from 'react-native';
import { Card, Divider, useTheme } from 'react-native-paper';
import ImageView from 'react-native-image-viewing';

import api from '../../services/api';
import ImageList from '../../components/ImageList';
import {
  Container,
  ProductWrapper,
  ProductTitle,
  ProductPrice,
} from './styles';

const ProductDetail = ({ navigation, route }) => {
  const theme = useTheme();
  const [productId] = useState(route.params?.productId);

  const [currentImageIndex, setImageIndex] = useState(0);
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState();

  const loadData = async () => {
    setLoading(true);

    const { data } = await api.get(`/products/${productId}`);
    setProduct({ ...data });

    setLoading(false);
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
              <ProductTitle>{product?.name}</ProductTitle>

              <ProductPrice color={theme.colors.primary}>
                {product?.price}
              </ProductPrice>
            </ProductWrapper>
          </Card>
        </ScrollView>
      )}
    </Container>
  );
};

export default ProductDetail;
