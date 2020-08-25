import styled from 'styled-components/native';
import Shimmer from 'react-native-shimmer-placeholder';
import { RectButton } from 'react-native-gesture-handler';

export const Product = styled.View`
  background: #fff;
  border-radius: 4px;
  elevation: 1;
  flex-grow: 1;
`;

export const ProductWrapper = styled.View`
  padding: 20px;
`;

export const ProductImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  display: flex;
  flex: 1;
  margin: 8px;
`;

export const PlaceHolderImage = styled(Shimmer)`
  width: 100%;
  height: 140px;
  align-self: center;
`;

export const ProductTitle = styled.Text.attrs({
  numberOfLines: 3,
})`
  font-size: 13px;
  margin: 4px 0 2px;
`;

export const PlaceHolderTitle = styled(Shimmer)`
  margin: 0 0 8px;
  height: 12px;
  width: 100%;
  border-radius: 1px;
`;

export const ProductPrice = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: ${(props) => (props.color ? props.color : '#333')};
`;

export const PlaceHolderPrice = styled(Shimmer)`
  width: 60%;
  height: 18px;
  border-radius: 1px;
`;

export const ProductUnity = styled.Text`
  font-size: 10px;
`;
