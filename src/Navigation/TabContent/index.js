import React from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FeatherIcon from 'react-native-vector-icons/Feather';

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
const perHeight = (height * 10) / 100;
import AsyncStorage from '@react-native-async-storage/async-storage';

export default TabContent = ({ navigation, state }) => {

    const settingNavigateHandler = async () => {
        try {
            const value = await AsyncStorage.getItem('userToken');
            if (value !== null) {
                console.log("User Already login");
            }
            navigation.navigate('Login')
        }
        catch (e) {
        }
    }


    return (
        <View style={styles.rootView} >
            <View style={styles.containerView}>
                {state.index == 0 ?
                    <TouchableOpacity style={[styles.iconView]} onPress={() => navigation.navigate('Home')} >
                        <AntDesignIcon
                            name="home"
                            size={20}
                            color="black"
                        />
                    </TouchableOpacity> :
                    <TouchableOpacity style={[styles.iconView]} onPress={() => navigation.navigate('Home')} >
                        <AntDesignIcon
                            name="home"
                            size={20}
                            color="lightgrey"
                        />
                    </TouchableOpacity>
                }
                {state.index == 1 ?
                    <TouchableOpacity style={[styles.iconView]} onPress={() => navigation.navigate('Category')} >
                        <FeatherIcon
                            name="grid"
                            size={20}
                            color="black"
                        />
                    </TouchableOpacity> :
                    <TouchableOpacity style={[styles.iconView]} onPress={() => navigation.navigate('Category')} >
                        <FeatherIcon
                            name="grid"
                            size={20}
                            color="lightgrey"
                        />
                    </TouchableOpacity>
                }
                {state.index == 2 ?
                    <TouchableOpacity style={[styles.iconView]} onPress={() => settingNavigateHandler()} >
                        <AntDesignIcon
                            name="setting"
                            size={20}
                            color="black"

                        />
                    </TouchableOpacity> :
                    <TouchableOpacity style={[styles.iconView]} onPress={() => settingNavigateHandler()} >
                        <AntDesignIcon
                            name="setting"
                            size={20}
                            color="lightgrey"
                        />
                    </TouchableOpacity>
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    rootView: {

        height: perHeight,
        justifyContent: "center",
        // backgroundColor: "blue"
    },
    containerView: {
        backgroundColor: "white",
        elevation: 5,
        shadowColor: 'rgba(0,0,0,0.5)',
        shadowOffset: { width: 0.5 },
        shadowOpacity: 1,
        borderRadius: 10,
        justifyContent: "center",
        height: "60%",
        marginHorizontal: "5%",
        flexDirection: "row",
    },
    iconView: {
        flex: 0.3,
        justifyContent: "center",
        alignItems: "center"
    }
})