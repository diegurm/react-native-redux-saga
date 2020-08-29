import React from 'react';
import { View } from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { IconButton, useTheme } from 'react-native-paper';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import NavigationService from './services/navigation';

import DrawerContent from './components/DrawerContent';
import ButtonCart from './components/ButtonCart';

import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Routes = () => {
  const theme = useTheme();
  const navigationTheme = theme.dark ? DarkTheme : DefaultTheme;

  return (
    <>
      <NavigationContainer
        theme={navigationTheme}
        ref={NavigationService.navigationRef}>
        <Drawer.Navigator
          drawerContent={(props) => <DrawerContent {...props} />}>
          <Drawer.Screen name="Root" children={RootStack} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
};

const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => {
        return {
          headerBackTitleVisible: false,
          title: 'SportSHOP',
          animationEnabled: true,
          headerLeft: () => (
            <IconButton icon="menu" onPress={() => navigation.openDrawer()} />
          ),
        };
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
  );
};

export default Routes;
