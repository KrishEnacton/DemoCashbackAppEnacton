import React, { useState } from 'react'
import { View, Text, StyleSheet, Dimensions, FlatList, TouchableOpacity, Image } from 'react-native';
import { useSelector } from 'react-redux';
import FeatherIcon from 'react-native-vector-icons/Feather';

const winHeight = Dimensions.get('window').height
const winWidth = Dimensions.get('window').width
const headerHeight = (winHeight * 10) / 100;
const cardHeight = (winHeight * 10) / 100;


export default CategoryDetail = ({ navigation, route }) => {

    const { id, name, data } = route.params;

    return (
        <View>
            <View style={{ backgroundColor: "#37d67a" }}  >
                <TouchableOpacity onPress={() => { navigation.goBack() }}>
                    <FeatherIcon
                        name="chevron-left"
                        size={22}
                        color="black"
                        style={{ margin: 10 }}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.Container}>
                <View style={styles.Box} >
                    <Text style={{ textAlign: "center", textAlignVertical: "center", color: "white", fontWeight: "bold" }} >{name}</Text>
                </View>
            </View>
            <View style={{ marginTop: headerHeight + 30, marginLeft: 20 }}>
                <FlatList
                    keyExtractor={(item, index) => (index.toString())}
                    data={data}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={styles.Card} >
                                <View style={{ backgroundColor: 'white', elevation: 10, height: 50, width: 50, marginRight: 10 }}  >
                                    <Image style={{ height: 50, width: 50 }} source={{
                                        uri: item?.icon,
                                    }} />
                                </View>
                                <View style={{ justifyContent: 'space-evenly' }}>
                                    <Text >{item.name}</Text>
                                    <Text style={{ color: '#37d67a' }}>{item.slug}</Text>
                                </View>
                            </View>
                        )
                    }}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    Container: {
        height: headerHeight,
        width: winWidth,
        backgroundColor: '#37d67a',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    Box: {
        height: 130,
        width: winWidth / 1.7,
        backgroundColor: '#006b76',
        borderRadius: 10,
        justifyContent: "center",
        marginTop: headerHeight
    },
    Card: {
        height: cardHeight,
        width: winWidth / 2,
        margin: 10,
        flexDirection: 'row',
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 1,
        padding: 5,

        //backgroundColor: 'black'
    }
})

