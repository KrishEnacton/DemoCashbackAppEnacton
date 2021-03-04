import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default Footer = () => {
    return (
        <View style={styles.rootView}>

        </View>
    )
}

const styles = StyleSheet.create({
    rootView: {
        backgroundColor: "yellow",
        flex: 1,
    },
    container: {
        backgroundColor: "lightgrey",
        flexDirection: "row",
        height: "12%"
    },
    iconView: {
        marginTop: "4.5%",
        marginLeft: "3%"
    },
    btnSearch: {
        backgroundColor: "white",
        borderRadius: 10,
        height: "65%",
        marginLeft: "3%",
        marginRight: 20,
        marginTop: "2.5%",
        flex: 1,
        justifyContent: 'center', //Centered vertically
        // alignItems: 'center', // Centered horizontally
    },
    txtSearch: {
        paddingLeft: 20,
        color: "grey"
    }
})