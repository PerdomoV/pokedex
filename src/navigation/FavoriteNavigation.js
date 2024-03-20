import { createStackNavigator } from "@react-navigation/stack";
import FavoriteScreen from "../screens/Favorite";

const Stack = createStackNavigator();

export default function FavoriteNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Favoritos" component={FavoriteScreen} options={{
        title: "Favoritos",
        headerTitleAlign: "center"
      }} />
    </Stack.Navigator>
  );
}