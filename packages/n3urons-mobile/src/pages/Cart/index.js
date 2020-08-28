import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert } from 'react-native';
import { useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  EmptyCart,
  EmptyWrapper,
  EmptyHeader,
  EmptyInfo,
  StartShoppingButton,
  StartShoppingButtonText,
  CartItems,
  Product,
  ProductImage,
  ProductTitle,
  ProductPrice,
  ProductAmount,
  ProductAmountText,
  ProductInfo,
  DeleteButton,
  OrderDetails,
  ProductSubTotal,
  AmountButton,
  AboutProduct,
  AboutWrapper,
  Checkout,
  CheckoutTotal,
  CheckoutButton,
  CheckoutButtonText,
  CheckoutWrapper,
  CheckoutHeader,
} from './styles';

import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../utils/format';
import NavigationService from '../../services/navigation';

const Cart = () => {
  const theme = useTheme();
  const total = useSelector((state) =>
    formatPrice(
      state.cart.reduce((totalAmount, product) => {
        return totalAmount + product.price * product.amount;
      }, 0),
    ),
  );

  const cart = useSelector((state) =>
    state.cart.map((product) => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    })),
  );

  const dispatch = useDispatch();

  const handleIncrement = (product) => {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  };

  const handleDecrement = (product) => {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  };

  const handleRemove = (product) => {
    Alert.alert(
      'Remover produto',
      'Deseja remover esse produto do carrinho?',
      [
        {
          text: 'Cancelar',
        },
        {
          text: 'Remover',
          onPress: () => {
            dispatch(CartActions.removeFromCart(product?.id));
          },
        },
      ],
      { cancelable: false },
    );
  };

  return (
    <Container>
      {!cart.length ? (
        <EmptyCart>
          <EmptyWrapper>
            <EmptyHeader color={theme.colors.text}>Oops...</EmptyHeader>
            <EmptyInfo color={theme.colors.text}>
              Parece que seu carrinho de compras está vazio!
            </EmptyInfo>
            <StartShoppingButton
              color={theme.colors.primary}
              onPress={() => NavigationService.navigate('Products')}>
              <StartShoppingButtonText>
                Continuar comprando
              </StartShoppingButtonText>
            </StartShoppingButton>
          </EmptyWrapper>
        </EmptyCart>
      ) : (
        <>
          <CartItems
            data={cart}
            keyExtractor={(product) => String(product.id)}
            renderItem={({ item: product, index }) => (
              <Product isFirst={index} isLast={index === cart.length - 1}>
                <ProductImage source={{ uri: product.photos[0] }} />
                <ProductInfo>
                  <AboutProduct>
                    <AboutWrapper>
                      <ProductTitle color={theme.colors.text}>
                        {product?.name}
                      </ProductTitle>
                      <ProductPrice>{product?.priceFormatted}</ProductPrice>
                    </AboutWrapper>
                    <DeleteButton onPress={() => handleRemove(product)}>
                      <Icon name="delete-forever" size={18} color="#999" />
                    </DeleteButton>
                  </AboutProduct>

                  <OrderDetails>
                    <ProductAmount>
                      <AmountButton onPress={() => handleDecrement(product)}>
                        <Icon
                          name="remove-circle-outline"
                          size={24}
                          color={theme.colors.primary}
                        />
                      </AmountButton>
                      <ProductAmountText color={theme.colors.text}>
                        {product?.amount}
                      </ProductAmountText>
                      <AmountButton onPress={() => handleIncrement(product)}>
                        <Icon
                          name="add-circle-outline"
                          size={24}
                          color={theme.colors.primary}
                        />
                      </AmountButton>
                    </ProductAmount>
                    <ProductSubTotal>{product?.subtotal}</ProductSubTotal>
                  </OrderDetails>
                </ProductInfo>
              </Product>
            )}
          />
          <Checkout>
            <CheckoutWrapper>
              <CheckoutHeader>Total</CheckoutHeader>
              <CheckoutTotal>{total}</CheckoutTotal>
            </CheckoutWrapper>
            <CheckoutButton color={theme.colors.primary}>
              <CheckoutButtonText>FINALIZAR COMPRA</CheckoutButtonText>
            </CheckoutButton>
          </Checkout>
        </>
      )}
    </Container>
  );
};

export default Cart;
