import React, { useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';



const randIndex = Math.floor(Math.random() * 3);
const randColorIndex = Math.floor(Math.random() * 9);

export default Card = ({ data, allData, backgroundColor, modalToggle, ModalContent, detailsHandler }) => {

    return (
        <>
            <TouchableOpacity onPress={() => { modalToggle(); ModalContent("CardModel"); detailsHandler(allData); }} style={[styles.rootView, { backgroundColor: backgroundColor }]}>
                <View style={{ margin: 10, marginTop: 10 }}>
                    <View style={[styles.imageStyle, styles.imageContainer]} >
                        <Image
                            style={styles.imageStyle}
                            source={{
                                uri: allData?.store?.logo,
                            }}
                        />
                    </View>
                    <Text style={styles.titleStyle} >{data}</Text>
                    <Text style={styles.offerStyle} >{allData?.store?.cashback_string}</Text>
                </View>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    rootView: {
        height: 120,
        width: 170,
        borderRadius: 10,
        marginRight: 10,
        paddingTop: 5,
        // elevation: 1,
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
    }
})
