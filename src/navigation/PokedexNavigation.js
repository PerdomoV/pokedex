import { createStackNavigator } from "@react-navigation/stack";
import PokedexScreen from "../screens/Pokedex";
import PokemonScreen from "../screens/Pokemon";

const Stack = createStackNavigator();

export default function FavoriteNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Pokedex" component={PokedexScreen}
        options={{
          title: "",
          headerTitleAlign: "center",
          headerTransparent: true
        }}
      />
      <Stack.Screen 
        name="Pokemon" 
        component={PokemonScreen} 
        options={
          { 
            title: "", 
            headerTransparent: true
          }
        }
      />
    </Stack.Navigator>
  );
}