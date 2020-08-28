import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import NavigationService from './services/navigation';

import ButtonCart from './components/ButtonCart';

import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <>
      <NavigationContainer ref={NavigationService.navigationRef}>
        <Stack.Navigator
          screenOptions={{
            headerBackTitleVisible: false,
            title: 'SportSHOP',
            animationEnabled: true,
          }}>
          <Stack.Screen
            name="Products"
            component={Products}
            options={{
              headerRight: () => (
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                  <ButtonCart
                    style={{ paddingTop: 4, marginRight: 6 }}
                    onPress={() => NavigationService.navigate('Cart')}
                  />
                </View>
              ),
            }}
          />
          <Stack.Screen
            name="ProductDetail"
            component={ProductDetail}
            options={{
              headerRight: () => (
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                  <ButtonCart
                    style={{ paddingTop: 4, marginRight: 6 }}
                    onPress={() => NavigationService.navigate('Cart')}
                  />
                </View>
              ),
            }}
          />
          <Stack.Screen name="Cart" component={Cart} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Routes;
