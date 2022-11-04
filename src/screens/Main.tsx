import React, {useEffect, useState} from 'react';
import {View} from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {RootStackParamList} from "./types";
import {HomeScreen} from "./Home/HomeScreen";
import {DetailsScreen} from "./Details/DetailsScreen";
import {api, PokemonItem} from "../api/api";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Main = () => {
    const [allPokemons, setAllPokemons] = useState<PokemonItem[]>([]);

    useEffect(() => {
        api.getAllPokemons()
            .then(res => {
                setAllPokemons(res.data.results)
            })
    }, []);

    return (
        <View style={{flex: 1}}>
            <Stack.Navigator>
                <Stack.Screen name={'Home'} component={HomeScreen}/>
                <Stack.Screen name={'Details'} component={DetailsScreen}/>
            </Stack.Navigator>
        </View>
    );
};