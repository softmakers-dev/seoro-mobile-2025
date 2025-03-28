import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from "react-native";

const PostForm = ({
                      onSubmit,
                      initialValues = { title: "", content: "" }
}) => {

    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    return (
        <View>
            <Text style={styles.label}>Enter Title</Text>
            <TextInput
                style={styles.input}
                value={title}
                onChangeText={(text) => setTitle(text)}
            />
            <Text style={styles.label}>Enter Content</Text>
            <TextInput
                style={styles.input}
                value={content}
                onChangeText={(text) => setContent(text)}
            />
            <Button
                title="Save Post"
                onPress={() => onSubmit(title, content)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        marginHorizontal: 10,
        padding: 5
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 10
    }
});

export default PostForm;
