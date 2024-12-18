import { StyleSheet, Text, View } from "react-native";

export default function App() {

  return (
    <>
    <View>
      <Text>Hello world</Text>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});