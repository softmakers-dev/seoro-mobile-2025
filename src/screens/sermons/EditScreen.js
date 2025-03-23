import React, { useContext } from 'react';
import {useNavigation} from "@react-navigation/native";

import {Context} from "./context/SermonContext";
import PostForm from "../../components/PostForm";

const EditScreen = ({route}) => {

    const {state, editSermon} = useContext(Context);
    const sermon = state.find((sermon) => sermon.id === route.params.id);

    const navigation = useNavigation();

    return (
        <PostForm
            initialValues={{title: sermon.title, content: sermon.content}}
            onSubmit={(title, content) => {
                editSermon(route.params.id, title, content, () => navigation.pop());
            }}
        />
    );
}

export default EditScreen;
