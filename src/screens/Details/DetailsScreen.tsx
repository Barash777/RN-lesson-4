import React, {useEffect, useState} from 'react';
import {Image, Text, View} from "react-native";
import {DetailsPropsType} from "../types";
import {api, Pokemon} from "../../api/api";

export const DetailsScreen = (props: DetailsPropsType) => {
    const [pokemon, setPokemon] = useState<Pokemon | null>();

    useEffect(() => {
        api.getPokemonById(props.route.params.url)
            .then(res => {
                setPokemon(res.data)
            })
    }, []);

    return (
        <View>
            {pokemon
                ? <View>
                    <Text>{pokemon.name}</Text>
                    <Image source={{uri: pokemon.sprites.other["official-artwork"].front_default}}
                           style={{width: 200, height: 200}}/>
                </View>
                : undefined
            }
        </View>
    );
};