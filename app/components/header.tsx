import { Link } from "expo-router";
import { Pressable, StyleSheet, View } from "react-native";
function Header() {
  return (
    <View>
      <Link href="/home/details" style={styles.text}  asChild>
        <Pressable style={styles.button}>ViweDetails</Pressable>
      </Link>
      <Link href="/home/sample" style={styles.text}>
        <Pressable style={styles.button}>CheckYourEmotion</Pressable>
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
  },
});
