import { View } from "native-base";
import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
} from "native-base";

export default class Stats extends Component {
  render() {
    return (
      <Card
        style={{
          flex: 1,
          backgroundColor: "#000033",
          borderRadius: 30,
          width: "90%",
          padding: 10,
          marginLeft: 20,
        }}
      >
        <CardItem style={{ backgroundColor: "#000033" }}>
          <View
            style={{
              marginRight: 20,
              marginLeft: 15,
              color: "white",
              borderRightWidth: 2,
              borderRightColor: "grey",
              borderRightStyle: "solid",
            }}
          >
            <Text style={{ color: "white", fontSize: 30, fontWeight: "700" }}>
              200
            </Text>
            <Text style={{ color: "grey", paddingRight: 40 }}>Total</Text>
          </View>
          <View
            style={{
              marginRight: 20,
              marginLeft: 25,
              color: "white",
              borderRightWidth: 2,
              borderRightColor: "grey",
              borderRightStyle: "solid",
            }}
          >
            <Text style={{ color: "white", fontSize: 30, fontWeight: "700" }}>
              160
            </Text>
            <Text style={{ color: "grey", paddingRight: 40 }}>Attended</Text>
          </View>
          <View style={{ marginRight: 20, marginLeft: 25 }}>
            <Text style={{ color: "white", fontSize: 30, fontWeight: "700" }}>
              200
            </Text>
            <Text style={{ color: "grey", paddingRight: 40 }}>Skipped</Text>
          </View>
        </CardItem>
      </Card>
    );
  }
}
