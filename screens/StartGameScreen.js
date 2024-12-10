import { StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.numberInput} maxLength={2} keyboardType="number-pad" autoCapitalize="none" autoCorrect={false}/>
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        // flex: 1,
        marginTop: 100,
        padding: 16,
        backgroundColor: "#72063c",
        marginTop: 100,
        marginHorizontal: 24,
        borderRadius: 8,
        elevation: 4,
        shadowColor: "black",
        shadowOffset: {width: 0, height: 2},
    },
    numberInput: {
        height: 70,
        fontSize: 32,
        width: 50,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        marginVertical: 8,
        color:'#ddb52f',
        fontWeight:"bold",
        textAlign: "center",
    }
});
