import React, {useEffect, useState} from 'react';
import {Text, View} from "react-native";
import {api, PokemonItem} from "../../api/api";

export const HomeScreen = () => {
    const [allPokemons, setAllPokemons] = useState<PokemonItem[]>([]);

    useEffect(() => {
        api.getAllPokemons()
            .then(res => {
                setAllPokemons(res.data.results)
            })
    }, []);

    return (
        <View>
            <Text>Home</Text>
        </View>
    );
};