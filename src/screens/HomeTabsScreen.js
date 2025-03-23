import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SermonsScreen from "./sermons/SermonsScreen";
import ScripturesScreen from "./scriptures/ScripturesScreen";
import ChurchInfoScreen from "./churchInfo/ChurchInfoScreen";

const Tab = createBottomTabNavigator();

const HomeTabsScreen = () => {

    return (
        <Tab.Navigator initialRouteName="Sermons" screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name="Sermons"
                component={SermonsScreen}
                options={{
                    title: "설교듣기"
                }}
            />
            <Tab.Screen
                name="Scripts"
                component={ScripturesScreen}
                options={{
                    title: "말씀묵상"
                }}
            />
            <Tab.Screen
                name="ChurchInfo"
                component={ChurchInfoScreen}
                options={{
                    title: "교회안내"
                }}
            />
        </Tab.Navigator>
    );
}

export default HomeTabsScreen;
