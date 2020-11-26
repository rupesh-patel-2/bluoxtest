import { Platform } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import NetInfo from "@react-native-community/netinfo";
import Constants from 'expo-constants';
import { CommonActions } from "@react-navigation/native";

const checkInternetConnection = () => {
  return new Promise(async (resolve, reject) => {
    const connectionInfo = await NetInfo.fetch();
    resolve(
      !(connectionInfo.type === "none" || connectionInfo.type === "unknown")
    );
  });
};

const getDeviceType = () => {
  return Platform.OS.toUpperCase();
};

const getDeviceId = () => {
  return Constants.deviceId;
};

const storeCartListData = async (itemData) => {
  var cartData = await getCartListData()
  if (cartData != undefined && cartData != null && cartData != "") {
    cartData = JSON.parse(cartData);
    cartData.push(itemData)
    await AsyncStorage.setItem('cartData', JSON.stringify(cartData));
  }
  else {
    var cartArray = [];
    cartArray.push(itemData)
    await AsyncStorage.setItem('cartData', JSON.stringify(cartArray));
  }
};

const getCartListData = async () => {
  var data = await AsyncStorage.getItem('cartData');
  return data
};

const removeItemFromCartList = async (position) => {
  var cartData = await getCartListData()
  if (cartData != undefined && cartData != null && cartData != "") {
    cartData = JSON.parse(cartData);
    try {
      cartData.splice(position, 1);
      await AsyncStorage.setItem('cartData', JSON.stringify(cartData));
    }
    catch (e) {
    }
  }
}

const clearCartListData = async () => {
  try {
    await AsyncStorage.removeItem("cartData");
    return true;
  }
  catch (exception) {
    return false;
  }
};

const clearNavigationStack = (navigation) => {
  navigation.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{ name: "ProductListScreen" }],
    })
  );
};

export default {
  checkInternetConnection,
  getDeviceType,
  getDeviceId,
  storeCartListData,
  getCartListData,
  clearCartListData,
  removeItemFromCartList,
  clearNavigationStack
};
