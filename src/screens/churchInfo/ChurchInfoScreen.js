import React from 'react';
import { View, Text, StyleSheet } from "react-native";

const ChurchInfoScreen = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Church info.</Text>
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
    }
});

export default ChurchInfoScreen;
