import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@react-navigation/elements";

const LoginScreen = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Login</Text>
            <Button
                style={styles.button}
                onPressIn={() =>
                    navigation.navigate("Home")}>
                Go to Home
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 25
    },
    button: {
        marginTop: 10
    }
});

export default LoginScreen;
