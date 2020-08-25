import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import NavigationService from './services/navigation';

import ProdutctList from './pages/ProdutctList';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';

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
          <Stack.Screen name="ProdutctList" component={ProdutctList} />
          <Stack.Screen name="ProductDetail" component={ProductDetail} />
          <Stack.Screen name="Checkout" component={Checkout} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Routes;
