import { StatusBar } from "expo-status-bar";
import {
    ImageBackground,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
} from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./screens/GameScreen";
import { useState } from "react";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
    const [userNumber, setUSerNumber] = useState();
    const [gameIsOver, setGameIsOver] = useState(true);

    function pickedNumberHandler(pickedNumber) {
        setUSerNumber(pickedNumber);
        setGameIsOver(false);
    }

    function gameOverHandler() {
        setGameIsOver(true);
    }

    let screen = <StartGameScreen onPickedNumber={pickedNumberHandler} />;

    if (userNumber) {
        screen = (
            <GameScreen
                userNumber={userNumber}
                onGameOver={gameOverHandler()}
            />
        );
    }

    if (gameIsOver && userNumber) {
        screen = <GameOverScreen></GameOverScreen>;
    }

    return (
        <LinearGradient
            colors={["#4e0329", "#ddb52f"]}
            style={styles.rootScreen}
        >
            <ImageBackground
                source={require("./assets/images/background.png")}
                resizeMode="cover"
                style={styles.rootScreen}
                imageStyle={styles.backgroundImage}
            >
                <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
            </ImageBackground>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
        // backgroundColor: "#ddb52f"
    },
    backgroundImage: {
        opacity: 0.15,
    },
});
