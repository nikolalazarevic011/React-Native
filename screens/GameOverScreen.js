import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";

export default function GameOverScreen() {
    return (
        <View style={styles.rootContainer}>
            <Title>Game over </Title>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={require("../assets/images/success.png")}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: "center",
        alignItems: "center",
    },
    imageContainer: {
        width: 30,
        height: 30,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: "hidden",
        margin: 36,
    },
    image: {
        width: "100%",
        height: "100%",
    },
});
