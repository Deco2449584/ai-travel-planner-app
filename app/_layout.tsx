import { Stack } from "expo-router";
import { useFonts } from "expo-font";
export default function RootLayout() {
  useFonts({
    outfit: require("../assets/fonts/Inter-Regular.ttf"),
    "outfit-medium": require("../assets/fonts/Inter-Medium.ttf"),
    "outfit-semimiBold": require("../assets/fonts/Inter-SemiBold.ttf"),
    "outfit-bold": require("../assets/fonts/Inter-Bold.ttf"),
  });

  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  );
}
