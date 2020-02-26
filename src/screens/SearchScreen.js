import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import useResults from "../hooks/useResults";
import SearchBar from "../components/SearchBar";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, error, searchApi] = useResults();

  const filterResultsByPrice = price => results.filter(r => r.price === price);

  return (
    // <View style={{ flex: 1 }}>
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {error ? <Text>{error}</Text> : null}
      <ScrollView>
        <ResultsList
          title="Cost Effective"
          results={filterResultsByPrice("$")}
        />
        <ResultsList title="Bit Pricier" results={filterResultsByPrice("$$")} />
        <ResultsList
          title="Big Spender"
          results={filterResultsByPrice("$$$")}
        />
      </ScrollView>
      {/* </View> */}
    </>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
