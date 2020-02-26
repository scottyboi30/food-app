import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.background}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        autoCorrect={false}
        autoCapitalize="none"
        style={styles.inputStyle}
        placeholder="Search"
        value={term}
        onChangeText={newTerm => onTermChange(newTerm)}
        onEndEditing={() => onTermSubmit()}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  background: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#F0EEEE",
    height: 50,
    marginVertical: 15,
    borderRadius: 5,
    flexDirection: "row",
    marginHorizontal: 10
  },
  inputStyle: {
    flex: 1,
    fontSize: 18
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginRight: 15
  }
});
