import React from 'react';
import {Text, View} from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {RootStackParamList} from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Main = () => {
    return (
        <View>
            <Text>Main</Text>
        </View>
    );
};