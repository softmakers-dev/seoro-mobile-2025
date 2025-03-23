import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import IndexScreen from "./IndexScreen";
import ShowScreen from "./ShowScreen";
import CreateScreen from "./CreateScreen";
import EditScreen from "./EditScreen";
import {Provider} from "./context/ScriptureContext";

const Stack = createNativeStackNavigator();

const ScripturesScreen = () => {

    return (
        <Stack.Navigator initialRouteName="Index">
            <Stack.Screen name="Index" component={IndexScreen} options={{title: "묵상목록"}} />
            <Stack.Screen name="Show" component={ShowScreen} options={{title: "묵상읽기"}} />
            <Stack.Screen name="Create" component={CreateScreen} options={{title: "묵상등록"}} />
            <Stack.Screen name="Edit" component={EditScreen} options={{title: "묵상수정"}} />
        </Stack.Navigator>
    );
}

export default () => {
    return (
        <Provider>
            <ScripturesScreen />
        </Provider>
    );
}
