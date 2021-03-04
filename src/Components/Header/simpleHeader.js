import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity, Dimensions, Animated, ImageBackground, Pressable
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

//import ImageOverlay from "react-native-image-overlay";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
const perHeight = (height * 12) / 100;
const perRadius = (height * 30) / 100;

export default SimpleHeader = ({ ModalHandler, title }) => {

    return (
        <View style={styles.rootView}>
            <View style={[styles.container]}>
                <View style={styles.iconView}>
                    <TouchableOpacity onPress={ModalHandler} >
                        <FeatherIcon
                            name="menu"
                            size={30}
                            color="white"
                        />
                    </TouchableOpacity>

                </View>
                <Animated.View style={{ alignSelf: "center" }}>
                    <Text style={styles.txtTitle} >{title}</Text>
                </Animated.View>
                <View style={styles.iconView}>
                    <TouchableOpacity  >
                        <FeatherIcon
                            name="search"
                            size={30}
                            color="white"
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    rootView: {
        height: perHeight,
    },
    container: {
        backgroundColor: "#37d67a",
        flexDirection: "row",
        height: "100%",
        width: "100%",
        justifyContent: "space-between"
    },
    iconView: {
        marginHorizontal: "3%",
        alignSelf: "center"
    },
    txtTitle: {
        opacity: 1,
        fontWeight: 'bold',
        color: "white",
        fontSize: 16
    },

})