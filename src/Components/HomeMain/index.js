import React, { useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    FlatList,
    Button,
    TouchableOpacity
} from 'react-native';
import { useDispatch } from 'react-redux'

export default HomeMain = ({ categoryTitle, api, getData }) => {

    const [i, setI] = useState(0);

    return (
        <View style={styles.rootView}>
            <Text style={{ flex: 0.4, fontWeight: "bold" }}>{categoryTitle}</Text>
            <View style={{ flex: 0.7 }}>
                <FlatList
                    horizontal
                    keyExtractor={(item, index) => { return (index.toString()) }}
                    data={api}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        return (
                            <View>
                                <TouchableOpacity onPress={() => { setI(index); getData(item?.id) }}>
                                    <Text style={styles.txtFlatlist}>{item.name}</Text>
                                    {
                                        i == index ?
                                            <View style={{ height: 2, width: 16, backgroundColor: "black", marginTop: 2, alignSelf: "center" }}></View>
                                            :
                                            null
                                    }
                                </TouchableOpacity>

                            </View>
                        )
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    rootView: {
        flexDirection: "row",
        marginTop: 5,
        marginLeft: 5,
        marginBottom: 15,
        // backgroundColor: "black"
    },
    chileView: {

    },
    txtFlatlist: {
        paddingHorizontal: 15,
        color: "grey",
    }
})
