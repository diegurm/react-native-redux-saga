import styled from 'styled-components/native';
import { Caption, Title, Button } from 'react-native-paper';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
`;
export const ProductWrapper = styled.View`
  display: flex;
  padding: 15px;
`;
export const ProductTitle = styled(Title)`
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  margin: 4px 0 2px;
`;

export const ProductBrand = styled(Caption)`
  font-size: 16px;
  text-align: center;
  margin: 4px 0 2px;
  text-transform: uppercase;
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

export const Amount = styled.View`
  display: flex;
  justify-content: space-between;
  border: 1px solid #ccc;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  margin-top: 12px;
`;

export const AmountText = styled(Title)`
  margin-left: 2px;
`;

export const AmountButton = styled(Button)``;
