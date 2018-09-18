import React from "react";
import { View, Text } from "react-native";

export default class DetailScreen extends React.Component {
  render() {
    console.log(this.props.navigation.state.params);
    const { eventDateName } = this.props.navigation.state.params;
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>{`Hello... is it ${eventDateName} you're looking for?`}</Text>
      </View>
    );
  }
}
