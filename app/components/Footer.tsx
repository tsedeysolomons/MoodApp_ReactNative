import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Footers = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Footer</Text>
      <Text style={styles.text}>copy 2025 @ Tsedey SOlomon </Text>
      <Text style={styles.text}>All rights reserved</Text>
    </View>
  );
};

export default Footers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 4,
    backgroundColor: "#f8f8f8",
    borderBlockColor:"red",
  },
  text: {
    color: "rgba(0,0,0,0)",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "left",
  },
});
