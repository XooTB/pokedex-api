import Pokedex from 'pokedex-promise-v2';

const options = {
    protocol: 'https',
    versionPath: '/api/v2/',
    cacheLimit: 100 * 1000, // 100s
    timeout: 5 * 1000 // 5s
}
const P = new Pokedex(options);

async function Search(name) {
    const data = await P.getPokemonSpeciesByName(name);
    return data;
}


export default Search;


