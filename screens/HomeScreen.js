import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      concerts: [],
      gotData: false
    };
  }

  componentDidMount() {
    fetch("http://apis.is/concerts")
      .then(res => res.json())
      .then(res => this.setState({ gotData: true, concerts: res.results }));
  }

  render() {
    return (
      <View style={styles.container}>
        {!this.state.gotData ? (
          <ActivityIndicator size="large" />
        ) : (
          <Text>{this.state.concerts[0].eventDateName}</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  }
});
