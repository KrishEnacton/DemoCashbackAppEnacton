import React from 'react';
import { Text, View, StyleSheet, Platform, Dimensions, Button, TouchableOpacity, ScrollView } from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FeatherIcon from 'react-native-vector-icons/Feather';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
const winHeight = Dimensions.get('window').height
const ContainerHeight = (winHeight * 65) / 100

export default HeaderMenu = ({ ModalHandler }) => {
    return (
        <View style={styles.headerView}>


            <View style={styles.headerNotch} />
            <TouchableOpacity style={{ alignSelf: "flex-end", marginRight: 10 }} onPress={ModalHandler} >

                <AntDesignIcon
                    name="closecircle"
                    size={20}
                    color="#006b76"
                />

            </TouchableOpacity>

            <Text style={{ alignSelf: "center", marginTop: 25, fontWeight: "bold" }}>Sign In or Join Now</Text>

            <View style={{ flexDirection: "row", alignSelf: "center", marginTop: 20 }}>
                <TouchableOpacity style={[styles.btnStyle, { backgroundColor: "#37d67a" }]}>
                    <Text style={{ alignSelf: "center", color: "white", fontSize: 12 }} >Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btnStyle, { backgroundColor: "#006b76" }]}>
                    <Text style={{ alignSelf: "center", color: "white", fontSize: 12 }}>Sign Up</Text>
                </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 15 }}>

                <View style={{ margin: 25 }}>

                    <TouchableOpacity>
                        <View style={{ flexDirection: "row" }}>
                            <AntDesignIcon
                                name="home"
                                size={20}
                            />
                            <Text style={styles.txtStyle} >Home</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.seprator} ></View>

                    <TouchableOpacity>
                        <View style={{ flexDirection: "row", marginTop: 10 }}>
                            <FeatherIcon
                                name="shopping-bag"
                                size={20}
                            />
                            <Text style={styles.txtStyle} >Stores</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.seprator} ></View>

                    <TouchableOpacity>
                        <View style={{ flexDirection: "row", marginTop: 10 }}>
                            <FeatherIcon
                                name="shopping-bag"
                                size={20}
                            />
                            <Text style={styles.txtStyle} >Daily Deals</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.seprator} ></View>

                    <TouchableOpacity>
                        <View style={{ flexDirection: "row", marginTop: 10 }}>
                            <FeatherIcon
                                name="grid"
                                size={20}
                            />
                            <Text style={styles.txtStyle} >Category</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.seprator} ></View>

                    <TouchableOpacity>
                        <View style={{ flexDirection: "row", marginTop: 10 }}>
                            <IoniconsIcon
                                name="people-outline"
                                size={20}
                            />
                            <Text style={styles.txtStyle} >Refer & Earn</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.seprator} ></View>

                    <TouchableOpacity>
                        <View style={{ flexDirection: "row", marginTop: 10 }}>
                            <AntDesignIcon
                                name="sharealt"
                                size={20}
                            />
                            <Text style={styles.txtStyle} >Share & Earn</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.seprator} ></View>

                    <TouchableOpacity>
                        <View style={{ flexDirection: "row", marginTop: 10 }}>
                            <AntDesignIcon
                                name="copy1"
                                size={20}
                            />
                            <Text style={styles.txtStyle} >About Us</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.seprator} ></View>

                    <TouchableOpacity>
                        <View style={{ flexDirection: "row", marginTop: 10 }}>
                            <FeatherIcon
                                name="help-circle"
                                size={20}
                            />
                            <Text style={styles.txtStyle} >Help</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.seprator} ></View>

                    <TouchableOpacity>
                        <View style={{ flexDirection: "row", marginTop: 10 }}>
                            <MaterialCommunityIcon
                                name="translate"
                                size={20}
                            />
                            <Text style={styles.txtStyle} >Change Language</Text>
                        </View>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headerView: {
        height: ContainerHeight,
        backgroundColor: "white",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,

        //elevation: 5,
    },
    headerNotch: {
        height: 5,
        width: 50,
        backgroundColor: "lightgrey",
        justifyContent: "center",
        borderRadius: 5,
        marginTop: 7,
        alignSelf: "center"
    },
    btnStyle: {
        height: 35,
        width: 100,
        backgroundColor: "grey",
        borderRadius: 50,
        marginHorizontal: 20,
        justifyContent: "center",
        elevation: 10,
        shadowColor: 'lightgrey',
        shadowOffset: { height: 3, width: 0.5 },
        shadowOpacity: 1,
        //shadowRadius: 1
    },
    txtStyle: {
        paddingLeft: 15,
        alignSelf: "center",
    },
    seprator: {
        height: 1,
        width: "100%",
        backgroundColor: "lightgrey",
        marginTop: 10
    }
})