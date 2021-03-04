import React from 'react'
import { View, Dimensions } from "react-native"
import Carousel from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselCardItem'
import data from './data'

const width = Dimensions.get("window").width - 22;
const widthPer = width + ((width * 6) / 100);

const CarouselCards = () => {
    const isCarousel = React.useRef(null)
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
            //useScrollView={true}
            />
        </View>
    )
}


export default CarouselCards