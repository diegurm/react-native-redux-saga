import React, { useEffect, useState } from 'react';
import { View, ScrollView, ActivityIndicator } from 'react-native';
import { Card, Divider, useTheme } from 'react-native-paper';
import ImageView from 'react-native-image-viewing';

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

  useEffect(() => {
    setTimeout(() => {
      setProduct({
        productId: 1,
        name:
          'Camisa Juventus Away 20/21 s/n° Jogador Adidas Masculina - Marinho',
        price: 349.99,
        sizes: ['P', 'M', 'G', 'GG'],
        photos: [
          'https://static.netshoes.com.br/produtos/camisa-juventus-away-2021-sn-jogador-adidas-masculina/12/NQQ-3135-012/NQQ-3135-012_zoom1.jpg',
          'https://static.netshoes.com.br/produtos/camisa-juventus-away-2021-sn-jogador-adidas-masculina/12/NQQ-3135-012/NQQ-3135-012_zoom2.jpg',
          'https://static.netshoes.com.br/produtos/camisa-juventus-away-2021-sn-jogador-adidas-masculina/12/NQQ-3135-012/NQQ-3135-012_zoom3.jpg',
          'https://static.netshoes.com.br/produtos/camisa-juventus-away-2021-sn-jogador-adidas-masculina/12/NQQ-3135-012/NQQ-3135-012_zoom4.jpg',
        ],
      });
      setLoading(false);
    }, 1500);
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
