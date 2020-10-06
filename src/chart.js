import React, { Component } from "react";
import { View, Text } from "react-native";
import { VictoryPie } from "victory-native";

export default class CardExample extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#333751",
          borderRadius: 50,
          width: "90%",
          padding: 20,
          margin: 20,
        }}
      >
        <VictoryPie
          padding={{ top: 30, right: 180, bottom: 30, left: 20 }}
          innerRadius={100}
          data={[
            { x: "Skipped", y: 20 },
            { x: "Attended", y: 80 },
          ]}
          height={200}
        />
        <Text
          style={{
            textAlign: "center",
            color: "white",
            marginTop: 20,
            fontSize: 18,
          }}
        >
          Pheww...You're{" "}
          <Text
            style={{
              textAlign: "center",
              color: "green",
              marginTop: 20,
              fontSize: 18,
            }}
          >
            Safe
          </Text>
          !
        </Text>
      </View>
    );
  }
}
