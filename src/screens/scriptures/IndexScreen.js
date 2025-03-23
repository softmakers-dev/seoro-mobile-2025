import React, {useContext, useLayoutEffect} from 'react';
import {View, Text, StyleSheet, FlatList, Button, TouchableOpacity} from "react-native";
import {Feather} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";

import {Context} from "./context/ScriptureContext";

const IndexScreen = () => {

    const {state, addScripture, deleteScripture} = useContext(Context);
    const navigation =useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('Create')} style={{ marginRight: 15 }}>
                    <Feather name="plus" size={25} />
                </TouchableOpacity>
            ),
        });
    }, [navigation]);

    return (
        <View>
            <FlatList
                data={state}
                keyExtractor={(scripture) => scripture.title}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Show', {id: item.id})}>
                            <View style={styles.container}>
                                <Text style={styles.title}>{item.title} - {item.id}</Text>
                                <TouchableOpacity onPress={() => deleteScripture(item.id)}>
                                    <Feather name="trash" style={styles.icon}/>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    );
                }}
             />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5,
        paddingVertical: 10,
        borderTopWidth: 1,
        borderColor: 'gray'
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    }
});

export default IndexScreen;
