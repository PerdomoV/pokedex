import { API_HOST } from "../utils/constants";

export async function getPokemonsApi(endpointUrl){

    try{
        const url = `${API_HOST}/pokemon?limit=20&offset=0`;
        const response = await fetch( endpointUrl || url);
        const result = await response.json();
        return result;
    }catch(error){
        throw error;
        console.error('Error en getPokemonsApi: ', error);
    }

}

export async function getPokemonDetailByUrlApi(url){
    try{
        const response = await fetch(url);
        const result = await response.json();
        // console.log('pokemonDetail: ', result);
        return result;
    } catch(error){
        throw error;
    }
}

export async function getPokemonDetailsApi(id){
    try{
        const url = `${API_HOST}/pokemon/${id}`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch(error) {
        throw Error;
    }
}