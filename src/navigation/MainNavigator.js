import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProductListScreen from "../screens/ProductList/ProductListScreen";
import ProductSubCatListScreen from "../screens/ProductSubCatList/ProductSubCatListScreen";
import ProductDetailScreen from "../screens/ProductDetail/ProductDetailScreen";
import ProdItemDetailScreen from "../screens/ProdItemDetail/ProdItemDetailScreen";
import CartScreen from "../screens/cart/CartScreen";

const MainStackNavigator = createStackNavigator();

export const MainNavigator = () => {
  return (
    <MainStackNavigator.Navigator>

      <MainStackNavigator.Screen
        name="ProductListScreen"
        component={ProductListScreen}
        options={(props) => {
          return { headerShown: false };
        }}
      />

      <MainStackNavigator.Screen
        name="ProductSubCatListScreen"
        component={ProductSubCatListScreen}
        options={(props) => {
          return { headerShown: false };
        }}
      />

      <MainStackNavigator.Screen
        name="ProductDetailScreen"
        component={ProductDetailScreen}
        options={(props) => {
          return { headerShown: false };
        }}
      />

      <MainStackNavigator.Screen
        name="ProdItemDetailScreen"
        component={ProdItemDetailScreen}
        options={(props) => {
          return { headerShown: false };
        }}
      />

      <MainStackNavigator.Screen
        name="CartScreen"
        component={CartScreen}
        options={(props) => {
          return { headerShown: false };
        }}
      />

    </MainStackNavigator.Navigator>
  );
};
