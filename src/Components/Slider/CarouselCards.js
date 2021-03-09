import React, { useState } from 'react'
import { View, Dimensions, StyleSheet } from "react-native"
import Carousel, { Pagination } from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselCardItem'
import data from './data'

const width = Dimensions.get("window").width - 22;
const widthPer = width + ((width * 6) / 100);

const CarouselCards = () => {
    const isCarousel = React.useRef(null)
    const [ind, setInd] = useState(0);
    //console.log("Width:", width);
    return (
        <View style={{}}>
            <Carousel
                autoplay={true}
                enableMomentum={false}
                lockScrollWhileSnapping={true}
                //autoplayDelay={1000}
                autoplayInterval={2000}
                // layout="default"
                //ref={isCarousel}
                data={data}
                renderItem={CarouselCardItem}
                sliderWidth={width + 4}
                itemWidth={width + 3}
                style={{ borderRadius: 10 }}
                loop={true}
                style={{ borderRadius: 5 }}
                onSnapToItem={(index) => setInd(index)}
            //useScrollView={true}
            />
            <View style={{ marginTop: -16 }} >
                <Pagination
                    dotsLength={data.length}
                    activeDotIndex={ind}
                    dotStyle={styles.dot_styles}
                    inactiveDotStyle={styles.inactive_dot_styles}
                    inactiveDotOpacity={1}
                    inactiveDotScale={1}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    dot_styles: {
        width: 20,
        height: 6,
        borderRadius: 3,
        backgroundColor: "white",
    },
    inactive_dot_styles: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: "black",
    },
})


export default CarouselCards