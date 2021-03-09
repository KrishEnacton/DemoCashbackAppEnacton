import ContentLoader, { Rect, Circle, Path } from "react-content-loader/native"
import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
export default CardLoader = () => {
    const [cardL, setCardL] = useState([1, 2, 3, 4]);
    return (
        <FlatList
            horizontal
            keyExtractor={(item, index) => (index.toString())}
            data={cardL}
            showsHorizontalScrollIndicator={false}
            style={{ marginBottom: 10 }}
            renderItem={({ item, index }) => {
                return (
                    <View style={{ backgroundColor: "white", height: 120, width: 180, borderRadius: 10, marginRight: 10, paddingTop: 5 }}>
                        <ContentLoader
                            speed={2}
                            width={140}
                            height={100}
                            viewBox="0 0 100 100"
                            backgroundColor="#f3f3f3"
                            foregroundColor="#ecebeb"
                        >
                            <Rect x="0" y="7" rx="5" ry="3" width="75" height="37" />
                            <Rect x="0" y="53" rx="7" ry="3" width="50" height="9" />
                            <Rect x="0" y="74" rx="7" ry="3" width="100" height="9" />
                        </ContentLoader>
                    </View>
                )
            }}
        />
    )
}