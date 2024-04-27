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
        pokemonDetailPromisesArray.push(details);
      };

      // console.log('pokemonDetailPromisesArray : ', pokemonDetailPromisesArray);

      setPokemons(pokemonDetailPromisesArray);

      // getPokemonDetailByUrlApi(pokemon.url) 
      // const pokemonsArray = Promise.all(  response['results'].map( pokemon => getPokemonDetailByUrlApi(pokemon.url) ) );

      // console.log('pokemonDetailPromisesArray: ', pokemonDetailPromisesArray);
      // console.log('response: ', Object.keys(response));
      // const pokemonsArray = [];
      // for await (const pokemon of response['results']){
      //   const pokemonDetails = await getPokemonDetailByUrlApi(pokemon.url);
      //   pokemonsArray.push({
      //     id: pokemonDetails.id,
      //     name: pokemonDetails.type[0].type.name,
      //     order: pokemonDetails.order,
      //     image: pokemonDetails.sprites.other['official-artwork'].frontDefault
      //   });
      // }
      // setPokemons([ ...pokemons, ...pokemonsArray ]);
      // console.log('pokemons: ', pokemons);
    
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