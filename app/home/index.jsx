//import Header from "@/app/components/header";
import BgImage from "@/assets/images/mood.png";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import Footers from "../components/Footer";
import Headers from "../components/Header";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Headers />
      <ImageBackground source={BgImage} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Wellcome To check your current Emotion!</Text>
        <Text style={styles.text}>ስለዚ ለመለወት ካሰባችሁ ነገም ለላ ከን ነው፡፡</Text>
      </ImageBackground>
      <Footers />
    </View>
  );
};
export default HomeScreen;

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
