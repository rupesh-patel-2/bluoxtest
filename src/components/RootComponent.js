import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import Colors from "../config/Colors";
import Module from "../module/index";
import CustomActivityIndicator from "../module/CustomActivityIndicator/CustomActivityIndicator";

export default class RootComponent extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={Colors.transparent}
          barStyle={"dark-content"}
          translucent={true}
        />

        {this.props.children}

        <CustomActivityIndicator
          ref={(loaderRef) =>
            Module.CustomActivityIndicator.setLoaderRef(loaderRef)
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
