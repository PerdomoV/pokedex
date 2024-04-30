import React, {  useState, useEffect } from "react";
import { SafeAreaView } from "react-native";
import { getPokemonsApi, getPokemonDetailByUrlApi } from "../api/pokemon";
import { PokemonList } from "../components/PokemonList";

export default function Pokedex(){

  const [pokemons, setPokemons] = useState({});

  useEffect( () => {
    (async ()=> {
      await loadPokemons();
    })();
   }, []);

  const loadPokemons = async () => {
    try{

      // console.log('En el useEffect');
      const response = await getPokemonsApi();
      // console.log('typeof response: ', typeof response['results']);
      // console.log('response.results: ', response['results']);
      // console.log('response.results[0]: ', response['results'][0]);
      // response['results'].forEach( item => console.log('item: ', item))

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

      setPokemons(pokemonDetailPromisesArray);

    }catch(error){
      console.error('Error en loadPokemons: ', error);
      throw error;
    }
  }

  return (
    <SafeAreaView>
      <PokemonList pokemons={pokemons}/>
    </SafeAreaView>
  );


}