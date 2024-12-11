import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Title({ children }) {
    return (
        <View>
            <Text style={styles.title}>{children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#ddb52f",
        textAlign: "center",
        borderColor: "#ddb52f",
        padding: 12,
        borderWidth: 2,
    },
});
