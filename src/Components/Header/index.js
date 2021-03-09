import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity, Dimensions, Animated, ImageBackground, Pressable,
    StatusBar,
    SafeAreaView
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import HeaderMenu from '../HeaderMenu';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
//import ImageOverlay from "react-native-image-overlay";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
const perHeight = (height * 15) / 100;
const perRadius = (height * 30) / 100;
const perSearchHeight = (height * 5) / 100;

//const StatusBarHeight = insets.top();

export default Header = ({ animatedValue, ModalHandler, ModalContent, navigation }) => {
    //console.log("StatusBar Height:", StatusBarHeight);
    const insets = useSafeAreaInsets();
    const headerOpacity = animatedValue.interpolate({
        inputRange: [0, perHeight],
        outputRange: [0, 1],
        extrapolate: 'clamp'
    });

    const headerRadius = animatedValue.interpolate({
        inputRange: [perRadius, perRadius],
        outputRange: [0, 10],
        extrapolate: 'clamp'
    });

    const onPressHandler = () => {
        ModalHandler();
        ModalContent("HeaderMenu");
    }

    return (
        <View style={[styles.rootView, {}]}>

            {/* <ImageBackground style={{ height: perHeight, width: '100%', zIndex: 9999, resizeMode: 'cover' }} source={require('../../Assets/Images/home_header_bg.png')} > */}
            <Animated.View style={[styles.container, { paddingTop: insets.top - 10, borderBottomRightRadius: headerRadius, borderBottomLeftRadius: headerRadius }]}>
                <View style={styles.iconView}>
                    <TouchableOpacity onPress={onPressHandler}>
                        <FeatherIcon
                            name="menu"
                            size={30}
                            color="white"
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, height: "100%", justifyContent: "center" }}>
                    <Animated.View style={{ position: 'absolute', paddingLeft: 10, }}>
                        <Text style={{ fontSize: 12, color: "white" }} > Welcome to </Text>
                        <View style={{ width: 150 }}>
                            <Text style={styles.txtTitle} > MultiCashBack </Text>
                        </View>
                    </Animated.View>
                    <Animated.View style={[styles.btnSearch, { opacity: headerOpacity }]}>
                        <TouchableOpacity style={styles.btnTouchableSearch} onPress={() => navigation.navigate("Search")} >
                            <Text style={styles.txtSearch}>Search Cashback, Stores, Categories</Text>
                            <View style={{ flex: 1 }}>
                                <FeatherIcon
                                    name="search"
                                    size={22}
                                    color="#37d67a"
                                />
                            </View>
                        </TouchableOpacity>
                    </Animated.View>
                </View>
            </Animated.View>
            {/* </ImageBackground> */}
        </View>
    )
}

const styles = StyleSheet.create({
    rootView: {
        // flex: 1,
        height: perHeight,


    },
    container: {
        backgroundColor: "#37d67a",
        flexDirection: "row",
        height: "100%",
        //borderBottomRightRadius: 10,
        // borderBottomLeftRadius: 10,

    },
    iconView: {
        marginLeft: "3%",
        alignSelf: "center"
    },
    btnSearch: {

        backgroundColor: "#37d67a",
        borderRadius: 10,
        height: "45%",
        marginLeft: "3%",
        marginRight: "2%",
        // flex: 1,
        justifyContent: 'center', //Centered vertically
        // // alignItems: 'center', // Centered horizontally
        // alignSelf: "center",


    },
    btnTouchableSearch: {
        backgroundColor: "white",
        height: perSearchHeight,
        borderRadius: 10,
        //justifyContent: "center",
        flexDirection: "row",
        alignItems: "center"
    },
    txtTitle: {
        opacity: 1,
        fontWeight: 'bold',
        color: "white",
        //position: "absolute",
        //backgroundColor: "black"
        //opacity: 0
    },
    txtSearch: {
        paddingLeft: 20,
        color: "grey",
        paddingRight: 20
    }
})