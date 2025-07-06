import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
function Header() {
  return (
    <View>
      <Link href="/home/details" style={styles.text} asChild>
        <Pressable style={styles.button}>
          <Text>ViweDetails</Text>
        </Pressable>
      </Link>
      <Link href="/home/sample" style={styles.text} asChild>
        <Pressable style={styles.button}>
          <Text>CheckEmotion</Text>
        </Pressable>
      </Link>
    </View>
  );
}
export default Header;
const styles = StyleSheet.create({
  text: {
    fontFamily: "check",
    color: "white",
    fontSize: 24,
    justifyContent: "center",
  },
  button: {
    backgroundColor: "rgba(0,0,0,0.75)",
    height: 40,
    justifyContent: "center",
    padding: 2,
    borderRadius: 10,
    gap: 10,
    margin: 10,
  },
});
