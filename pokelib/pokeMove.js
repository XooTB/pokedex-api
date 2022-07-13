import Pokedex from "pokedex-promise-v2";


const P = new Pokedex();


const pokeMove = async (name) => {
    const Data = await P.getMoveByName(name);
    return Data;
}

export default pokeMove; 