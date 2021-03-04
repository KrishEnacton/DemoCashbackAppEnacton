import React, { useState, useEffect, useMemo } from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import SimpleHeader from '../../Components/Header/simpleHeader';
import ModalMenu from '../../Components/ModalMenu';
import { useSelector, useDispatch } from 'react-redux';
import HeaderMenu from '../../Components/HeaderMenu';
import { COLORS_SETS } from '../../Theme/Colors';

export default Category = ({ navigation }) => {
    const [modalToggle, setModalToggle] = useState(false);

    const state = useSelector(state => state.AllCategoryReducer.data);
    const stateParentData = useSelector(state => state.AllCategoryReducer.parentData);

    const categoryHandler = (id, name) => {
        var tmpArr = [];
        // for (const key of state) {
        //     if (key.parent_id == id) {
        //         tmpArr.push(key);
        //     }
        // }
        const tmpPro = new Promise((resolve, reject) => {
            for (const key of state) {
                if (key.parent_id == id) {
                    tmpArr.push(key);
                    //console.log("Cat:", key);
                }
            }
            resolve();
        })
        tmpPro.then(() => {
            navigation.navigate('CategoryDetail', {
                id: id,
                name: name,
                data: tmpArr
            });
        })
        // navigation.navigate('CategoryDetail', {
        //     id: id,
        //     name: name,
        //     data: tmpArr
        // });
    }

    const renderItem = ({ item, index }) => {
        const randRed = Math.floor(Math.random() * 255);
        const randGreen = Math.floor(Math.random() * 255);
        const randBlue = Math.floor(Math.random() * 255);
        return (
            <TouchableOpacity onPress={() => { categoryHandler(item.id, item.name) }} style={styles.boxRootView}>
                <View style={[styles.boxView, { backgroundColor: COLORS_SETS[1][index % 9] }]} ></View>
                <View style={{ height: 70, width: 70, justifyContent: "center" }} ><Text style={{ textAlign: "center" }} >{item.name}</Text></View>
            </TouchableOpacity>
        )
    }

    const ModalHandler = () => {
        if (modalToggle)
            setModalToggle(false);
        else
            setModalToggle(true)
    }

    return (
        <View>
            <ModalMenu modalToggle={modalToggle} ModalHandler={ModalHandler} ModelContent={HeaderMenu} />
            <SimpleHeader ModalHandler={ModalHandler} title={"All Stores"} />
            <Text style={{ margin: 10, fontWeight: "bold" }} >View Stores By Category</Text>
            <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={stateParentData}
                horizontal
                maxToRenderPerBatch={10}
                showsHorizontalScrollIndicator={true}
                renderItem={renderItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    boxRootView: {
        marginHorizontal: 10,
        marginTop: 10,
    },
    boxView: {
        borderRadius: 5,
        height: 40,
        width: 40,
        alignSelf: "center"
    }
})