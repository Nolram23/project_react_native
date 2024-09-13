import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "./Search";

const Main = () => {
  return (
    <View style={styles.container}>
      <Text>prueba</Text>
      <SearchBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 50,
  },
});

export default Main;
