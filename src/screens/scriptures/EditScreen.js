import React, {useContext} from 'react';
import {StyleSheet} from "react-native";
import {useNavigation} from "@react-navigation/native";

import {Context} from "./context/ScriptureContext";
import PostForm from "../../components/PostForm";

const EditScreen = ({route}) => {

    const navigation = useNavigation();

    const {state, editScripture} = useContext(Context);
    const scripture = state.find((item) => item.id === route.params.id );

    return <PostForm
                initialValues={{title: scripture.title, content: scripture.content}}
                onSubmit={(title, content) => {
                    editScripture(route.params.id, title, content, () => navigation.pop());
                }}
            />
}

const styles = StyleSheet.create({});

export default EditScreen;
