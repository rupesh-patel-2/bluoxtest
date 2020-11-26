import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { MainNavigator } from "./MainNavigator";

const AppNavigator = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
  }, []);

  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
