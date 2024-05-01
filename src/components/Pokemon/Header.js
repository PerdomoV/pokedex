import { StyleSheet, View, SafeAreaView, Text, Image} from "react-native";
import { capitalize } from "lodash";
import getColorByPokemonType from "../../utils/getColorByPokemonType";

export default function Header(props){

    console.log('props en Header: ', props);

    const {
        name,
        order,
        image,
        type
    } = props;

    const color = getColorByPokemonType(type);
    const bgStyle= [{ backgroundColor: color, ...styles.bg }];

    return (
        <>
            <View style={bgStyle}>
                <SafeAreaView style={styles.content}>
                    <View style={styles.header}>
                        <Text style={styles.name}>
                            {capitalize(name)}
                        </Text>
                        <Text style={styles.order}>
                            #{`${ order }`.padStart(3, 0)}
                        </Text>
                    </View>
                    <View>
                        <Image source={{uri: image}} style={styles.image} />
                    </View>
                </SafeAreaView>
            </View>
        </>
    );
}

const styles = StyleSheet.create({

    bg: {
        width: "100%",
        hegiht: 400,
        position: "absolute",
        borderBottomEndRadius: 300,
        borderBottomLeftRadius: 300,
        trasnform: [{ scaleX: 2 }]
    },

    content: {
        marginHorizontal: 20,
        marginTop: 30
    },

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 40
    },

    name: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 27
    },

    order: {
        color: "#fff",
        fontWeight: "bold"
    },

    contentImg: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        top: 30
    }, 

    image: {
        width: 250,
        height: 300,
        resizeMode: "contain"
    }
});