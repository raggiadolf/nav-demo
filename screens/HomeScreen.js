import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  ScrollView,
  View,
  Image,
  FlatList,
  TouchableOpacity
} from "react-native";

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      concerts: []
    };
  }

  componentDidMount() {
    fetch("http://apis.is/concerts")
      .then(res => res.json())
      .then(res =>
        this.setState({
          concerts: res.results.map((c, i) => ({ ...c, key: `${i}` }))
        })
      );
  }

  onPress = concert => {
    this.props.navigation.navigate("Detail", concert);
  };

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.concertContainer}
        onPress={() => this.onPress(item)}
      >
        <Image style={styles.image} source={{ uri: item.imageSource }} />
        <View style={styles.infoContainer}>
          <Text style={styles.text}>{`Who? ${item.eventDateName}`}</Text>
          <Text style={styles.text}>{`When? ${new Date(
            item.dateOfShow
          ).toLocaleString("is-IS")}`}</Text>
          <Text style={styles.text}>{`Where? ${item.eventHallName}`}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <FlatList
          data={this.state.concerts}
          renderItem={this.renderItem}
          ListEmptyComponent={<ActivityIndicator size="large" />}
        />
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
