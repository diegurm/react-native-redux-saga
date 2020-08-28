import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ButtonCart = React.memo((props) => {
  const cartSize = useSelector((state) =>
    state.cart.reduce((total, p) => {
      return total + p.amount;
    }, 0),
  );

  return (
    <RectButton
      {...props}
      style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 44,
        minHeight: 44,
        ...props.style,
      }}>
      <Icon
        name="shopping-cart"
        size={24}
        color={props.color ? props.color : '#333'}
      />
      {cartSize > 0 && (
        <View
          style={{
            // On React Native < 0.57 overflow outside of parent will not work on Android, see https://git.io/fhLJ8
            position: 'absolute',
            left: 22,
            top: 2,
            backgroundColor: 'red',
            borderRadius: 12,
            width: 18,
            height: 18,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 0,
          }}>
          <Text style={{ color: 'white', fontSize: 8, fontWeight: 'bold' }}>
            {cartSize}
          </Text>
        </View>
      )}
    </RectButton>
  );
});

export default ButtonCart;
