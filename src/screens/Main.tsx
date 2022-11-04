import React from 'react';
import {Text, View} from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export const Main = () => {
    return (
        <View>
            <Text>Main</Text>
        </View>
    );
};