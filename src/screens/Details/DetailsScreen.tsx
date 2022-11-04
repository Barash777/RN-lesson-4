import React, {useEffect} from 'react';
import {Image, Text, View} from "react-native";
import {DetailsPropsType} from "../types";
import {useAppDispatch, useAppSelector} from "../../store/store";
import {getPokemonById} from "../../store/rootSlice";

export const DetailsScreen = (props: DetailsPropsType) => {
    // const [pokemon, setPokemon] = useState<Pokemon | null>();
    const pokemon = useAppSelector(state => state.root.pokemon)
    const dispatch = useAppDispatch()

    useEffect(() => {
        // api.getPokemonById(props.route.params.url)
        //     .then(res => {
        //         setPokemon(res.data)
        //     })
        dispatch(getPokemonById(props.route.params.url))
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