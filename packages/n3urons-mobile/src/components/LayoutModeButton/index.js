import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import * as ProductsActions from '../../store/modules/products/actions';
import { Container } from './styles';

const LayoutModeButton = ({ mode }) => {
  const dispatch = useDispatch();
  const { layoutMode } = useSelector((state) => state.products);

  return (
    <Container
      actived={layoutMode === mode}
      onPress={() => dispatch(ProductsActions.setLayoutMode(mode))}>
      <Icon
        name={mode === 'vertical' ? 'view-module' : 'view-list'}
        color={layoutMode === mode ? '#FFF' : '#333'}
        size={24}
      />
    </Container>
  );
};

export default LayoutModeButton;
