import {createSlice} from "@reduxjs/toolkit";
import {Pokemon, PokemonItem} from "../api/api";

const rootSlice = createSlice({
    name: 'root',
    initialState: {
        allPokemons: [] as PokemonItem[],
        pokemon: null as null | Pokemon
    },
    reducers: {},
    extraReducers: (builder) => {

    }
})

export const rootSliceReducer = rootSlice.reducer