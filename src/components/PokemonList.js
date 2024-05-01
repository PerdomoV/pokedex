import { StyleSheet, FlatList, ActivityIndicator, Platform } from 'react-native';
import { PokemonCard } from "./PokemonCard";

export function PokemonList(props){

    const { pokemons, loadPokemons } = props;

    console.log(props);

    const loadMore = () => {
        console.log('Cargando mas pokemons');
        loadPokemons();
    }

    return (
        <FlatList
            data={pokemons}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={pokemon => String(pokemon.id)}
            renderItem={ ({item}) => <PokemonCard pokemon={item}/> }
            contentContainerStyle={styles.flatListContentContainer}
            onEndReached={loadMore}
            onEndReachedThreshold={0.1}
            ListFooterComponent={
                <ActivityIndicator 
                    size="large"
                    style={styles.spinner}
                    color="#AEAEAE"
                />
            }
        />
    );
}

const styles = StyleSheet.create({
    flatListContentContainer: {
        paddingHorizontal: 5,
        marginTop: Platform.OS === "ios" ? 5 : 30
    },

    spinner: {
        marginTop: 20,
        marginBottom: Platform.OS === "ios" ? 60 : 90
    }
}) 