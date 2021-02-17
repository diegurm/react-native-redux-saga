import styled from 'styled-components/native';
import { Card } from 'react-native-paper';
import Shimmer from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';

export const ListVertical = styled.FlatList.attrs({
  numColumns: 2,
})`
  margin: 0 10px;
  padding: 10px;
`;

export const ListHorizontal = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { paddingBottom: 20 },
})`
  padding: 10px;
`;


