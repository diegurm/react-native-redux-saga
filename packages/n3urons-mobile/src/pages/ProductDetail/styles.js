import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
`;
export const Subtitle = styled.Text`
  color: ${(props) => props?.color || '#000'};
  font-weight: bold;
`;

export const ProductWrapper = styled.View`
  padding: 15px;
`;
export const ProductTitle = styled.Text`
  font-size: 16px;
  text-align: center;
  margin: 4px 0 2px;
  color: ${(props) => props?.color || '#000'};
`;

export const ProductPrice = styled.Text`
  font-weight: bold;
  font-size: 22px;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 15px;
  color: ${(props) => (props.color ? props.color : '#333')};
`;

export const AddButton = styled(RectButton)`
  background: ${(props) => (props.color ? props.color : '#333')};
  border-radius: 4px;
  flex-direction: row;
  overflow: hidden;
  margin-top: 10px;
  align-items: center;
  position: relative;
  height: 44px;
  margin: 16px;
`;

export const AddButtonText = styled.Text`
  flex: 1;
  text-align: center;
  font-weight: bold;
  color: #fff;
`;

export const ProductAmount = styled.View`
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  background: rgba(0, 0, 0, 0.5);
  height: 44px;
  width: 60px;
  position: absolute;
  top: 0;
  left: 0;
`;

export const ProductAmountText = styled.Text`
  color: #fff;
  margin-left: 2px;
`;
