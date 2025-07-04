import { Link } from "expo-router";
import { Button, View } from "react-native";
function Header() {
  return (
    <View>
      <Link href="/home/details">
        <Button title="View details" />
      </Link>
      <Link href="/home/sample">
        <Button title="Check your Emotion" />
      </Link>
    </View>
  );
}
export default Header;
