import { Link } from "expo-router";
import { StyleSheet, View } from "react-native";
function Header() {
  return (
    <View>
      <Link href="/home/details">
        <button> View details</button>
      </Link>
      <Link href="/home/sample">
        <button style={styles.Button}>Check your Emotion</button>
      </Link>
    </View>
  );
}
export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderCurve: "continuous",
  },
  text: {
    fontFamily: "check",
    color: "white",
    fontSize: 24,
    justifyContent: "center",
  },
  Button: {
    color: "rgba(0,0,0,0.25)",
  },
});
