import React, {useEffect, useState} from 'react';
import {FlatList, ListRenderItem, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {api, PokemonItem} from "../../api/api";
import {useAppNavigation} from "../types";

export const HomeScreen = () => {
    const [allPokemons, setAllPokemons] = useState<PokemonItem[]>([]);
    const navigation = useAppNavigation()

    useEffect(() => {
        api.getAllPokemons()
            .then(res => {
                setAllPokemons(res.data.results)
            })
    }, []);

    const render: ListRenderItem<PokemonItem> = ({item}) => {
        return <TouchableOpacity onPress={() => navigation.navigate('Details', {url: item.url})}>
            <View style={styles.item}>
                <Text>
                    {item.name}
                </Text>
            </View>
        </TouchableOpacity>
    }

    return (
        <View style={{paddingHorizontal: 20}}>
            <FlatList data={allPokemons} renderItem={render}/>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        borderWidth: 1,
        borderRadius: 15,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginVertical: 5
    }
})