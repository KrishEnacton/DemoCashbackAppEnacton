import React from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import Header from '../../Components/Header';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import FeatherIcon from 'react-native-vector-icons/Feather';

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
const perHeight = (height * 15) / 100;
const perRadius = (height * 30) / 100;
const perSearchHeight = (height * 5) / 100;

export default Search = ({ navigation }) => {
    const insets = useSafeAreaInsets();
    return (
        <View style={styles.rootView}>
            <View style={[{ paddingTop: insets.top - 10, borderBottomRightRadius: 10, borderBottomLeftRadius: 10, flexDirection: "row", flex: 1, }]}>
                <TouchableOpacity style={{ alignSelf: "center", marginLeft: 7 }} onPress={() => navigation.goBack()}>
                    <FeatherIcon
                        name={"chevron-left"}
                        size={20}
                    />
                </TouchableOpacity>
                <View style={[{ opacity: 1, backgroundColor: "white", marginHorizontal: 15, height: 40, borderRadius: 5, flex: 1, alignSelf: "center", justifyContent: "center" }]}>

                    <TextInput placeholder="Search Cashback, Stores, Categories" placeholderTextColor={"black"} style={{ height: 40, marginLeft: 5 }} autoFocus={true} />

                </View>
            </View>
        </View>
        // <Text>Hello Search</Text>
    )
}
const styles = StyleSheet.create({
    viewHeader: {
        height: perHeight,
        backgroundColor: '#37d67a',
        paddingHorizontal: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        // borderTopRightRadius: 10
    },
    btnTouchableSearch: {
        backgroundColor: "white",
        height: perSearchHeight,
        borderRadius: 10,
        //justifyContent: "center",
        flexDirection: "row",
        alignItems: "center"
    },
    txtSearch: {
        paddingLeft: 20,
        color: "grey",
        paddingRight: 20
    },
    SliderView: {
        height: 100,
        width: "100%",
        backgroundColor: "#37d67a",
        marginVertical: 10,
        borderRadius: 10
    },
    ModalStyle: {
        height: 100,
        width: 100,
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: "blue"
    },
    imageContainer: {
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10
    },
    imageStyle: {
        height: 45,
        width: 110,
        borderRadius: 10,
    },
    titleStyle: {
        fontWeight: "bold",
        marginBottom: 5
    },
    offerStyle: {
        color: "red",
        fontSize: 12
    },
    rootView: {
        height: 110,
        width: "100%",
        borderRadius: 10,
        marginRight: 10,
        paddingTop: 5,
        backgroundColor: "#37d67a",
        // elevation: 1,
    },
})