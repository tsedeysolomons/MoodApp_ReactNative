import { Stack } from "expo-router";

export default function componentsLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511f",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="Header" />
      <Stack.Screen name="Footer" />
    </Stack>
  );
}
