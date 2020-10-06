import React, { Component } from "react";
import { ProgressBar, Colors } from "react-native-paper";
import { Button, Icon } from "native-base";

import { View, Text } from "react-native";

export default class Subjects extends Component {
  render() {
    return (
      <View style={{ marginLeft: 20 }}>
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: "500",
            marginBottom: 20,
          }}
        >
          Subjects
        </Text>
        <View
          style={{
            flex: 1,
            backgroundColor: "#333751",
            borderRadius: 25,
            width: "95%",
            padding: 20,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 12,
              fontWeight: "500",
              marginBottom: 10,
            }}
          >
            Embedding Sytems
          </Text>
          <ProgressBar progress={0.2} color={Colors.red900} />
          <Text style={{ color: "red" }}>23%</Text>

          <Text
            style={{
              color: "white",
              fontSize: 12,
              fontWeight: "500",
              marginTop: 10,
              textAlign: "center",
            }}
          >
            14 out of 16 classes attended
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: "#333751",
            borderRadius: 25,
            width: "95%",
            padding: 20,
            marginTop: 30,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 12,
              fontWeight: "500",
              marginBottom: 10,
            }}
          >
            VLSI Design
          </Text>
          <ProgressBar progress={0.6} color={Colors.yellow800} />
          <Text style={{ color: "yellow" }}>60%</Text>
          <Text
            style={{
              color: "white",
              fontSize: 12,
              fontWeight: "500",
              marginTop: 10,
              textAlign: "center",
            }}
          >
            42 out of 70 classes attended
          </Text>
        </View>
        <Button
          style={{
            backgroundColor: "#0099ff",
            width: "50%",
            justifyContent: "center",
            borderRadius: 8,
            margin: 70,
            marginTop: 25,
          }}
        >
          <Text style={{ color: "white" }}>Add Subjects</Text>
        </Button>
      </View>
    );
  }
}
