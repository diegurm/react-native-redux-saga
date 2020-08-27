import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props?.actived ? '#333' || '#999' : 'transparent'};
  border-color: #ccc;
  border-width: 1px;
  border-radius: 5px;
  margin: 0 4px;
  height: 44px;
  width: 44px;
`;
