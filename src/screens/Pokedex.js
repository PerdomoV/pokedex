import React, {  useState, useEffect } from "react";
import { SafeAreaView } from "react-native";
import { getPokemonsApi, getPokemonDetailByUrlApi } from "../api/pokemon";
import { PokemonList } from "../components/PokemonList";

export default function Pokedex(){

  const [nextUrl, setNextUrl] = useState(null);
  const [pokemons, setPokemons] = useState([]);

  useEffect( () => {
    (async ()=> {
      await loadPokemons();
    })();
   }, []);

  const loadPokemons = async () => {
    try{

      const response = await getPokemonsApi(nextUrl);
      setNextUrl(response.next);
      let pokemonDetailPromisesArray = [];

      for(const pokemon of response['results']){
        const details = await getPokemonDetailByUrlApi(pokemon.url);
        pokemonDetailPromisesArray.push({ 
          id: details.id,
          name: details.name,
          type: details.types[0].type.name,
          order: details.order,
          image: details.sprites.other["official-artwork"].front_default
        });
      };

      setPokemons([...pokemons, ...pokemonDetailPromisesArray]);

    }catch(error){
      console.error('Error en loadPokemons: ', error);
      throw error;
    }
  }

  return (
    <SafeAreaView>
      <PokemonList pokemons={pokemons} loadPokemons={loadPokemons}/>
    </SafeAreaView>
  );


}