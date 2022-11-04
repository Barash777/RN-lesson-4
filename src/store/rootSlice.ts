import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {api, Pokemon, PokemonItem} from "../api/api";

export const getAllPokemons = createAsyncThunk<PokemonItem[], void>('root/getAllPokemons',
    async (_, {rejectWithValue}) => {
        try {
            const res = await api.getAllPokemons()
            return res.data.results
        } catch (e) {
            // console.log(e)
            return rejectWithValue('as')
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
    }
})

export const rootSliceReducer = rootSlice.reducer