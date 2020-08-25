import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
`;

export const EmptySearch = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

export const EmptyWrapper = styled.View``;

export const EmptySearchIcon = styled(Icon).attrs({
  name: 'search',
  color: '#707070',
  size: 64,
})``;

export const EmptySearchTitle = styled.Text`
  text-align: center;
  font-size: 20px;
  color: #707070;
  margin: 15px 0;
`;

export const EmptySearchInfo = styled.Text`
  text-align: center;
`;

export const RadioView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const RadioViewButton = styled(RectButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props?.isChecked ? props?.color || '#999' : 'transparent'};
  border-color: #ccc;
  border-width: 1px;
  border-radius: 5px;
  height: 44px;
  width: 44px;
`;
