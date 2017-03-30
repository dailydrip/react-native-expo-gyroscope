import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Expo, { Gyroscope, Constants, WebBrowser, Components, KeepAwake } from "expo";

class App extends React.Component {
  state = {
    gyroscopeData: {}
  };

  componentDidMount() {
    this.subscribeGyroscope();
  }

  subscribeGyroscope = () => {
    Gyroscope.setUpdateInterval(1500);
    this.subscription = Gyroscope.addListener(gyroscopeData => {
      this.setState({ gyroscopeData });
    });
  };

  render() {
    let { x, y, z } = this.state.gyroscopeData;

    return (
      <View style={styles.container}>
        <Text>Gyroscope</Text>
        <Text>x: {x}</Text>
        <Text>y: {y}</Text>
        <Text>z: {z}</Text>
        <KeepAwake />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

Expo.registerRootComponent(App);
