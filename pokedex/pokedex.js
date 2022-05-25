import pokeSpecies from './pokeSpecies.js'

async function Search(name) {
    const data = await pokeSpecies(name);
    return data;
}


export default Search;


