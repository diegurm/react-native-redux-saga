import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const List = styled.FlatList.attrs({
  numColumns: 2,
  contentContainerStyle: { paddingBottom: 20 },
})`
  margin: 16px;
`;

export const ListItem = styled(RectButton)`
  flex-direction: column;
  margin: 4px;
  height: 260px;
  flex: 0.5;
`;
