import React, {useEffect, useState} from 'react';
import {FlatList, ListRenderItem, Text, TouchableOpacity, View} from "react-native";
import {api, PokemonItem} from "../../api/api";

export const HomeScreen = () => {
    const [allPokemons, setAllPokemons] = useState<PokemonItem[]>([]);

    useEffect(() => {
        api.getAllPokemons()
            .then(res => {
                setAllPokemons(res.data.results)
            })
    }, []);

    const render: ListRenderItem<PokemonItem> = ({item}) => {
        return <TouchableOpacity>
            <View>
                <Text>
                    {item.name}
                </Text>
            </View>
        </TouchableOpacity>
    }

    return (
        <View>
            <FlatList data={allPokemons} renderItem={render}/>
        </View>
    );
};