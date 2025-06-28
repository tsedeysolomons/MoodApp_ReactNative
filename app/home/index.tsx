import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>
        Wellcome To check your current Emotion!
      </Text>
      <Link href="/home/details">
        <button> View details</button>
      </Link>
      <Link href="/home/sample">
        <button>Check your Emotion</button>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
});
