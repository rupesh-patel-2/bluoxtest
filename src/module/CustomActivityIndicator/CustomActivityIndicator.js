import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator
} from 'react-native';
import Colors from "../../config/Colors";

export default class CustomActivityIndicator extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isVisible: false,
      loaderColor: Colors.black,
    }
  }

  showLoader = (show, loaderColor) => {
    this.setState({
      isVisible: show,
      loaderColor: loaderColor != undefined ? loaderColor : Colors.black,
    })
  }

  render() {
    if (!this.state.isVisible) {
      return null
    }

    return (
      <View style={styles.containerView}>
        <ActivityIndicator size="large" color={this.state.loaderColor} />
      </View>
    )

  }
}

const styles = StyleSheet.create({
  containerView: {
    ...StyleSheet.absoluteFill,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.transparent,
    elevation: 10
  },

})
