import React, { useState, useEffect } from "react";
import { ScrollView, Text } from "react-native";
import { getPokemonDetailsApi } from "../api/pokemon";
import Header from "../components/Pokemon/Header";
import Type from "../components/Pokemon/Type";
import Stats from "../components/Pokemon/Stats";
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Pokemon(props) {

  const { 
    navigation, 
    route: {
      params
    }
  } = props;
  
  console.log('id: ', params.id);

  const [pokemon, setPokemon ] = useState(null);

  useEffect(()=>{
    navigation.setOptions({
      headerRight: () => null,
      headerLeft: () => (
        <Icon 
          name="arrow-left" 
          color="#fff" 
          size={20} 
          style={{marginLeft: 20, paddingBottom: 10}} 
          onPress={()=>navigation.goBack()}
        /> 
      )
    }),
    [navigation, params]
  })

  useEffect(() => {
    ( async () => {
      try {
        const response = await getPokemonDetailsApi(params.id);
        setPokemon(response);
      } catch(error){
        navigation.goBack();
      }
    } )()
  }, [ params ]);

  if(!pokemon) return null;

  return (
    <ScrollView>
      <Header 
        name={pokemon.name} 
        order={pokemon.order}
        image={pokemon.sprites.other["official-artwork"].front_default}
        type={pokemon.types[0].type.name}
      />

    <Type types={pokemon.types}/>
    <Stats stats={pokemon.stats}/>
    </ScrollView>
  );
}