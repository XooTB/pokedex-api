import Pokedex from "pokedex-promise-v2";

const P = new Pokedex();


const pokeAbility = async (name) => {
    const Data = await P.getAbilityByName(name);
    return Data;
}

export default pokeAbility; 