import React from 'react';
import { Text, View, StyleSheet, Platform, Button, TouchableOpacity, ScrollView, Image } from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FeatherIcon from 'react-native-vector-icons/Feather';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export default HeaderMenu = ({ ModalHandler, ModalData }) => {
    //console.log("data:", ModalData);
    return (
        <View style={styles.rootView}>
            <View style={styles.containerView} >
                <View style={styles.notch}></View>
                <TouchableOpacity style={styles.close_btn} onPress={ModalHandler} >
                    <AntDesignIcon name="closecircleo" size={20} />
                </TouchableOpacity>
                <View style={styles.content_view}>
                    <View style={styles.img_box}>
                        <Image
                            source={{
                                uri: ModalData?.store?.logo
                            }}
                            style={{ height: 55, width: 125, borderRadius: 10 }}
                        />
                    </View>
                    <Text>{ModalData?.title}</Text>
                    <Text style={{ color: 'orange' }}>{ModalData?.store?.cashback_string}</Text>
                    <View style={{ alignItems: 'center' }}>
                        <Text>PromoCode is Required</Text>
                        <Text>The Deal applies to a specific group of goods</Text>
                    </View>
                    <View style={styles.code}>
                        {ModalData.code != null ?
                            <View style={[styles.coupon_view, {
                                shadowColor: 'lightgrey',
                                shadowOffset: { height: 3, width: 0.5 },
                                shadowOpacity: 1, backgroundColor: '#ffe1d8', elevation: 5, marginRight: 10
                            }]}>
                                <Text style={{ fontSize: 12, alignSelf: "center", color: "red", textAlignVertical: "center" }}>{ModalData?.code}</Text>
                            </View> :
                            null
                        }
                        <View style={{ marginLeft: 10 }} ><Text>{ModalData.expiry_date}</Text></View>
                    </View>
                    <TouchableOpacity style={styles.shop_now_btn}>
                        <Text style={{ color: 'white' }}>Shop Now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    rootView: {
        height: "40%",
        backgroundColor: "white",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,

    },
    containerView: {
        height: "100%",
        width: "100%"
        //backgroundColor: 'yellow'
    },
    notch: {
        alignSelf: 'center',
        height: 3,
        width: 50,
        borderRadius: 10,
        backgroundColor: 'grey',
        marginTop: 5,
    },
    close_btn: {
        alignSelf: 'flex-end',
        marginRight: 10,
    },
    content_view: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center'
        //backgroundColor: 'black',
    },
    img_box: {
        height: 55,
        width: 125,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white', shadowColor: 'lightgrey',
        shadowOffset: { height: 3, width: 0.5 },
        shadowOpacity: 1,
    },
    code: {
        flexDirection: 'row',
        alignItems: "center"
    },
    coupon_view: {
        borderStyle: 'dashed',
        borderColor: '#ff6900',
        borderWidth: 1,
        height: 25,
        minWidth: 120,
        maxWidth: 150,
        //marginHorizontal: 30,
        borderRadius: 10,
        justifyContent: "center"
    },
    shop_now_btn: {
        width: 230,
        height: 35,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        elevation: 5,
        shadowColor: 'rgba(0,0,0,0.5)',
        shadowOffset: { height: 0.2, width: 0.5 },
        shadowOpacity: 1,
        marginBottom: 3
    }
})