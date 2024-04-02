import React, {  useState, useEffect } from "react";
import { SafeAreaView, Text } from "react-native";
import { getPokemonsApi } from "../api/pokemon";

export default function Pokedex(){

  // const [pokemons, setPokemons] = useState({});

  useEffect( () => {
    console.log('En el useEffect');
    getPokemonsApi().then(pokemones => {
      console.log('pokemones: ', pokemones);
    }).catch(error => {
      console.error('Error en useEffect: ', error);
    })
  }, []);

  return (
    <SafeAreaView>
      <Text>Estamos en el screen de Pokedex.</Text>
    </SafeAreaView>
  );
}