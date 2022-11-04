import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {api, Pokemon, PokemonItem} from "../api/api";

export const getAllPokemons = createAsyncThunk<PokemonItem[], void>('root/getAllPokemons',
    async (_, {rejectWithValue}) => {
        try {
            const res = await api.getAllPokemons()
            return res.data.results
        } catch (e) {
            // console.log(e)
            return rejectWithValue(e)
        }
    })

export const getPokemonById = createAsyncThunk<Pokemon, string>('root/getPokemonById',
    async (url, {rejectWithValue}) => {
        try {
            const res = await api.getPokemonById(url)
            return res.data
        } catch (e) {
            // console.log(e)
            return rejectWithValue(e)
        }
    })

const rootSlice = createSlice({
    name: 'root',
    initialState: {
        allPokemons: [] as PokemonItem[],
        pokemon: null as null | Pokemon
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllPokemons.fulfilled, (state, action) => {
                state.allPokemons = action.payload
            })
            .addCase(getPokemonById.fulfilled, (state, action) => {
                state.pokemon = action.payload
            })
    }
})

export const rootSliceReducer = rootSlice.reducer