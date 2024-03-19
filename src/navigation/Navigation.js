import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AccountScreen from "../screens/Account";
// import FavoriteScreen from "../screens/Favorite";
import FavoriteNavigation from "./FavoriteNavigation";
import PokedexScreen from "../screens/Pokedex";
import Icon from 'react-native-vector-icons/Ionicons';
import { Image } from 'react-native';


const Tab = createBottomTabNavigator();

export default function Navigation() {

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Favorite"
        component={FavoriteNavigation}
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="Pokedex"
        component={PokedexScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => renderPokeball()
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarLabel: "Mi cuenta",
          tabBarIcon: ({ color, size }) => (
            <Icon name="person" color={color} size={size} />
          )
        }}
      />
    </Tab.Navigator>
  );
}


function renderPokeball() {
  return (
    <Image
      source={require('../assets/pokeball.png')}
      style={{ width: 75, height: 75, top: -15 }}
    />
  );
}