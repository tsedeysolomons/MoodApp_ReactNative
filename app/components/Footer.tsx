import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Footers = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Footer</Text>
    </View>
  );
};

export default Footers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#f8f8f8",
  },
  text: {
    color: "black",
    fontSize: 54,
    fontWeight: "bold",
    textAlign: "center",
  },
});
