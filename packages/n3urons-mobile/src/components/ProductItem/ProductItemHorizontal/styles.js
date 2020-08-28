import styled from 'styled-components/native';
import { IconButton, Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Product = styled.View`
  background: ${(props) => (props.color ? props.color : '#fff')};
  border-radius: 4px;
  elevation: 1;
  flex-direction: row;
  flex: 1;
`;

export const ProductImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 92px;
  height: 92px;
  align-self: center;
  margin: 8px;
  margin-right: 16px;
  /* border: 1px solid #ddd; */
  /* border-width: 1px;
  border-color: #ddd;
  border-radius: 5px; */
`;

export const ProductWrapper = styled.View`
  display: flex;
  flex: 1;

  justify-content: center;
  padding: 8px;
`;

export const ProductTitle = styled.Text.attrs({
  numberOfLines: 3,
})`
  font-size: 13px;
  margin: 4px 0 2px;
  color: ${(props) => (props.color ? props.color : '#333')};
`;

export const ProdutcActions = styled.View`
  display: flex;
  flex-direction: row;
  flex: 1;
  margin-top: 10px;
  justify-content: space-between;
  align-content: center;
`;

export const ProductPrice = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: ${(props) => (props.color ? props.color : '#333')};
`;

export const ProductUnity = styled.Text`
  font-size: 10px;
`;

export const ShoppingButton = styled(IconButton)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

export const ShoppingButtonIcon = styled(Icon).attrs((props) => ({
  name: 'add-shopping-cart',
  size: 24,
  color: '#333',
}))``;
