import request from "superagent";

export const GetPoke = (pokeId) => request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex/?pokemon=${pokeId}`)