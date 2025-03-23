import React, {useContext, useLayoutEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";

import {useNavigation} from "@react-navigation/native";

import {Context} from "./context/SermonContext";
import {EvilIcons} from "@expo/vector-icons";

const ShowScreen = ({route}) => {

    const {state} = useContext(Context);
    const sermon = state.find((sermon) => sermon.id === route.params.id);

    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity
                    onPress={() => navigation.navigate('Edit', {id: route.params.id})}
                    style={{ marginRight: 15 }}>
                    <EvilIcons name="pencil" size={30} />
                </TouchableOpacity>
            ),
        });
    }, [navigation]);

    return (
        <View>
            <Text>{sermon.title}</Text>
            <Text>{sermon.content}</Text>
        </View>
    );
}

const styles = StyleSheet.create({});

export default ShowScreen;
