import React, {useContext} from 'react';
import {StyleSheet} from "react-native";
import {useNavigation} from "@react-navigation/native";

import {Context} from "./context/ScriptureContext";
import PostForm from "../../components/PostForm";

const CreateScreen = () => {

    const navigation = useNavigation();

    const {addScripture} = useContext(Context);

    return <PostForm
            onSubmit={(title, content) => {
                addScripture(title, content, () => navigation.navigate('Index'));
            }}
        />
}

const styles  = StyleSheet.create({});

export default CreateScreen;
