import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  ScrollView,
  View,
  Image
} from "react-native";

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

  renderConcerts = concerts =>
    concerts.map((concert, index) => {
      return (
        <View style={styles.concertContainer} key={index}>
          <Image style={styles.image} source={{ uri: concert.imageSource }} />
          <View style={styles.infoContainer}>
            <Text style={styles.text}>{`Who? ${concert.eventDateName}`}</Text>
            <Text style={styles.text}>{`When? ${new Date(
              concert.dateOfShow
            ).toLocaleString("is-IS")}`}</Text>
            <Text style={styles.text}>{`Where? ${concert.eventHallName}`}</Text>
          </View>
        </View>
      );
    });

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        {!this.state.gotData ? (
          <ActivityIndicator size="large" />
        ) : (
          this.renderConcerts(this.state.concerts)
        )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 8
  },
  concertContainer: {
    flex: 1,
    flexDirection: "row",
    paddingBottom: 16
  },
  infoContainer: {
    paddingLeft: 8,
    justifyContent: "space-around",
    flex: 1
  },
  image: {
    height: 125,
    width: 125
  },
  text: {
    fontSize: 12,
    fontFamily: "space-mono"
  }
});
