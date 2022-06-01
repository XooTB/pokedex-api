import Pokedex from "pokedex-promise-v2";

const P = new Pokedex();


const SearchPokemon = async (name) => {
    const Data = await P.getPokemonByName(name);
    return Data;
}

export default SearchPokemon; 