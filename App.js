import { StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { StatusBar } from "expo-status-bar";

export default function App() {
    return (
        <>
            <StatusBar style="light" />
            <CategoriesScreen />
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
