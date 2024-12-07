import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.dummyText}>Another piece of text</Text>
            </View>
            {/* <Text style={{ margin: 16, borderWidth: 6, padding: 16 }}> */}
            <Text style={styles.dummyText}>Hello</Text>
            <Button title="Tap Me" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    dummyText: {
        margin: 16,
        borderWidth: 6,
        padding: 16,
        borderColor: "red",
    },
});
