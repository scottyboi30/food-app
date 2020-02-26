import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image, FlatList } from "react-native";

import yelp from "../api/yelp";

const ResultsShowScreen = ({ route }) => {
  const [result, setResult] = useState(null);
  const id = route.params["id"];

  const getResults = async () => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResults();
  }, []);

  return (
    <View>
      <FlatList
        keyExtractor={photo => photo}
        data={(result && result.photos) || []}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <Image style={styles.image} source={{ uri: item }} />
          </View>
        )}
      />
    </View>
  );
};

export default ResultsShowScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center"
  },
  image: {
    width: 250,
    height: 300,
    marginVertical: 10
  }
});
