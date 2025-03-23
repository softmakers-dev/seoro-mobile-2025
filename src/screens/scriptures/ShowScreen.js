import React, {useContext, useLayoutEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {useNavigation} from "@react-navigation/native";

import {Context} from "./context/ScriptureContext";
import {EvilIcons, Feather} from "@expo/vector-icons";

const ShowScreen = ({route}) => {

    const {state} = useContext(Context);
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity
                    onPress={() => navigation.navigate('Edit', {id: route.params.id})}
                    style={{ marginRight: 15 }}
                >
                    <EvilIcons name="pencil" size={25} />
                </TouchableOpacity>
            ),
        });
    }, [navigation]);

    const scripture = state.find((item) => item.id === route.params.id);

    return (
        <View>
            <Text>{scripture.title}</Text>
            <Text>{scripture.content}</Text>
        </View>
    );
}

const styles = StyleSheet.create({});

export default ShowScreen;
