import Pokedex from 'pokedex-promise-v2';

const options = {
    protocol: 'https',
    versionPath: '/api/v2/',
    cacheLimit: 100 * 1000, // 100s
    timeout: 5 * 1000 // 5s
}
const P = new Pokedex(options);

async function pokeSpecies(name) {
    const data = await P.getPokemonByName(name);
    const info = {};

    info.name = name;
    // info.type = data.
    return data;
}


export default pokeSpecies;
