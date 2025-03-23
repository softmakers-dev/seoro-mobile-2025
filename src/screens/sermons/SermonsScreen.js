import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import IndexScreen from "./IndexScreen";
import ShowScreen from "./ShowScreen";
import CreateScreen from "./CreateScreen";
import EditScreen from "./EditScreen";

import {Provider} from "./context/SermonContext";

const Stack = createNativeStackNavigator();

const SermonsScreen = () => {

    return (
        <Stack.Navigator initialRouteName="Index">
            <Stack.Screen
                name="Index"
                component={IndexScreen}
                options={{
                    title: "설교목록"
                }}
            />
            <Stack.Screen
                name="Show"
                component={ShowScreen}
                options={{
                    title: "설교보기"
                }}
            />
            <Stack.Screen
                name="Create"
                component={CreateScreen}
                options={{
                    title: "설교등록"
                }}
            />
            <Stack.Screen
                name="Edit"
                component={EditScreen}
                options={{
                    title: "설교수정"
                }}
            />
        </Stack.Navigator>
    );
}

export default () => {
    return (
        <Provider>
            <SermonsScreen/>
        </Provider>
    );
}
