import axios from "axios";

export type PokemonItem = {
    name: string
    url: string
}

export type Pokemon = {
    id: number
    name: string
    sprites: {
        other: {
            'official-artwork': {
                'front_default': string
            }
        }
    }
}

const BASE_URL = 'https://pokeapi.co/api/v2'

const instance = axios.create({
    baseURL: BASE_URL,
})

export const api = {
    getAllPokemons() {

    },
    getPokemonById() {

    }
}