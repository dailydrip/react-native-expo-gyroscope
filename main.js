import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Expo, { Gyroscope } from "expo";

class App extends React.Component {
  state = {
    gyroscopeData: {}
  };

  componentDidMount() {
    this.subscribeGyroscope();
  }

  subscribeGyroscope = () => {
    this.subscription = Gyroscope.addListener(result => {
      this.setState({ gyroscopeData: result });
    });
  };

  render() {
    let { x, y, z } = this.state.gyroscopeData;

    if (round(x) > 90) {
      alert("X more than 90");
    }

    return (
      <View style={styles.container}>
        <Text>Open up main.js to start working on your app!</Text>
        <Text>Gyroscope:</Text>
        <Text>x: {round(x)} y: {round(y)} z: {round(z)}</Text>
      </View>
    );
  }
}

function round(n) {
  if (!n) {
    return 0;
  }
  let radians = Math.floor(n * 100) / 100;
  let degrees = radians * (180 / Math.PI);

  return degrees;
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
