import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { paddingBottom: 20 },
})`
  margin: 16px;
`;

export const ListItem = styled(RectButton)`
  /* border: 1px solid #ddd; */
  height: 120px;
  margin-bottom: 8px;
`;
