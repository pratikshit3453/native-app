import React, { Component } from "react";
import { Animated, View, StyleSheet, Text, ScrollView } from "react-native";

export default class Date extends Component {
  render() {
    return (
      <View style={{ marginLeft: 20, marginBottom: 35 }}>
        <Text style={{ color: "white" }}> Monday</Text>
        <Text style={{ color: "white", fontSize: 30, fontWeight: "700" }}>
          {" "}
          29th{" "}
          <Text style={{ color: "white", fontSize: 20, fontWeight: "500" }}>
            January 2020
          </Text>
        </Text>
      </View>
    );
  }
}
