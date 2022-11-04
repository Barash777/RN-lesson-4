import React, {useEffect, useState} from 'react';
import {Text, View} from "react-native";
import {DetailsPropsType} from "../types";
import {api, Pokemon} from "../../api/api";

export const DetailsScreen = (props: DetailsPropsType) => {
    const [pokemon, setPokemon] = useState<Pokemon>();

    useEffect(() => {
        api.getPokemonById(props.route.params.url)
            .then(res => {
                setPokemon(res.data)
            })
    }, []);

    return (
        <View>
            <Text>Details</Text>
        </View>
    );
};