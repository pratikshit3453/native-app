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
          marginBottom: 30,
        }}
      >
        <CardItem
          style={{
            backgroundColor: "#000033",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View
            style={
              {
                // color: "white",
                // borderRightWidth: 2,
                // borderRightColor: "grey",
                // borderRightStyle: "solid",
              }
            }
          >
            <Text style={{ color: "white", fontSize: 30, fontWeight: "700" }}>
              200
            </Text>
            <Text style={{ color: "grey" }}>Total</Text>
          </View>
          <Text
            style={{
              color: "white",
              borderRightWidth: 2,
              borderRightColor: "grey",
              borderRightStyle: "solid",
            }}
          ></Text>
          <View
            style={
              {
                // color: "white",
                // borderRightWidth: 2,
                // borderRightColor: "grey",
                // borderRightStyle: "solid",
              }
            }
          >
            <Text style={{ color: "white", fontSize: 30, fontWeight: "700" }}>
              160
            </Text>
            <Text style={{ color: "grey" }}>Attended</Text>
          </View>
          <Text
            style={{
              color: "white",
              borderRightWidth: 2,
              borderRightColor: "grey",
              borderRightStyle: "solid",
            }}
          ></Text>
          <View style={{}}>
            <Text style={{ color: "white", fontSize: 30, fontWeight: "700" }}>
              200
            </Text>
            <Text style={{ color: "grey" }}>Skipped</Text>
          </View>
        </CardItem>
      </Card>
    );
  }
}
