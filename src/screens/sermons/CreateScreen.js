import React, {useState, useContext} from 'react';
import {useNavigation} from "@react-navigation/native";

import {Context} from "./context/SermonContext";
import PostForm from "../../components/PostForm";

const CreateScreen = () => {

    const navigation = useNavigation();
    const {addSermon} = useContext(Context);

    return (
        <PostForm onSubmit={(title, content) => {
            addSermon(title, content, () => {
                navigation.navigate("Index");
            })
        }}/>
    );
}

export default CreateScreen;
