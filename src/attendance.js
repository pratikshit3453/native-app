import { Content } from "native-base";
import React, { Component } from "react";
import { Animated, View, Text, Button } from "react-native";

export default class Attendance extends Component {
  render() {
    return (
      <View style={{ marginLeft: 20 }}>
        <Text style={{ color: "white", fontSize: 20, fontWeight: "500" }}>
          Overall Attendance
        </Text>
      </View>
    );
  }
}
