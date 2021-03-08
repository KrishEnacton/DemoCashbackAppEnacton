import React, { useEffect, useRef } from 'react';
import { Modal, Text, View, Button, FlatList, ScrollView, StyleSheet, Dimensions, TouchableOpacity, Animated, Image } from 'react-native';
import Header from '../../Components/Header'
import Footer from '../../Components/Footer';
import HomeMain from '../../Components/HomeMain';
import Card from '../../Components/Card';
import { useSelector, useDispatch } from 'react-redux'
import { getPublicUserApiData, getAllCategoryRequest } from '../../Redux/Actions/PublicUserAction';
import { useState } from 'react';
import CardLoaders from '../../Components/CardLoader';
import FeatherIcon from 'react-native-vector-icons/Feather';
import HeaderMenu from '../../Components/HeaderMenu';
import ModalMenu from '../../Components/ModalMenu';
import { COLORS_SETS } from '../../Theme/Colors';
import CarouselCards from '../../Components/Slider/CarouselCards';
import CardModal from '../../Components/CardModal';

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
const perHeight = (height * 30) / 100;
const perSearch = (height * 5) / 100;
const perSlider = (height * 20) / 100;
const perModalHeight = (height * 100) / 100;

export default Home = ({ navigation }) => {
    const state = useSelector(state => state.PublicUserReducer);
    const dispatch = useDispatch();
    const apiDataStores = state?.data?.data?.data["procash/top-stores"]?.categories;
    const apiDataOffers = state?.data?.data?.data["procash/top-offers"]?.categories;
    const apiDataDeals = state?.data?.data?.data["procash/top-deals"]?.categories;

    const [store, setStore] = useState({});
    const [offer, setOffer] = useState({});
    const [deal, setDeal] = useState({});
    const [flag, setFlag] = useState(0);
    const [ModalContent, setModalContent] = useState("");
    var [offerDetails, setOfferDetails] = useState("");
    var [dealDetails, setDealDetails] = useState("");
    const [modalToggle, setModalToggle] = useState(false);
    const offset = useState(new Animated.Value(0))[0];

    var randIndex = 0;
    var randColorIndex = 0;

    useEffect(() => {
        if (flag == 0 || flag == 1) {
            dispatch(getPublicUserApiData());
            dispatch(getAllCategoryRequest());
            setFlag(flag + 1);
            setStore(state?.data?.data?.data["procash/top-stores"]?.categories[0]);
            setOffer(state?.data?.data?.data["procash/top-offers"]?.categories[0]);
            setDeal(state?.data?.data?.data["procash/top-deals"]?.categories[0]);
        }
    }, [state]);

    const getStoreDataById = (id) => {
        for (const key of apiDataStores) {
            randIndex = Math.floor(Math.random() * 3);
            randColorIndex = Math.floor(Math.random() * 9);
            if (key?.id == id)
                setStore(key);
        }
    }

    const getOfferDataById = (id) => {
        for (const key of apiDataOffers) {
            if (key?.id == id)
                setOffer(key);
        }
    }

    const getDealDataById = (id) => {
        for (const key of apiDataDeals) {
            if (key?.id == id)
                setDeal(key);
        }
    }

    const ModalHandler = () => {
        if (modalToggle)
            setModalToggle(false);
        else
            setModalToggle(true)
    }

    const ModalContentHandler = (modalType) => {

        setModalContent(modalType);
        setDealDetails("");
        setOfferDetails("");

    }

    const dealDetailsHandler = (alldata) => {

        // setModalContent(modalType);
        // console.log("data:", offer.coupons);        
        //console.log("DealData:", deal.deals);

        for (const data of deal.deals) {
            if (data.id == alldata?.id) {
                setDealDetails(data);
                //setDealDetails()
            }
        }

    }

    const offerDetailsHandler = (alldata) => {

        // setModalContent(modalType);
        // console.log("data:", offer.coupons);        
        for (const data of offer.coupons) {
            if (data.id == alldata?.id) {
                setOfferDetails(data);
                //setDealDetails()
            }
        }

    }


    return (
        //<HeaderMenu />

        <View style={{ flex: 1 }} >
            {ModalContent == "HeaderMenu" ?
                <ModalMenu modalToggle={modalToggle} ModalHandler={ModalHandler} ModelContent={HeaderMenu} isHeaderMenu={true} /> :
                ModalContent == "CardModel" ?
                    <ModalMenu modalToggle={modalToggle} ModalHandler={ModalHandler} ModelContent={CardModal} offerDetailsHandler={offerDetails} dealDetailsHandler={dealDetails} isHeaderMenu={false} /> :
                    null
            }

            <Header animatedValue={offset} ModalHandler={ModalHandler} ModalContent={ModalContentHandler} />

            <ScrollView
                scrollEventThrottle={16}
                onScroll={Animated.event([
                    {
                        nativeEvent: {
                            contentOffset: {
                                y: offset
                            }
                        }
                    }
                ],
                    { useNativeDriver: false }
                )}
                showsVerticalScrollIndicator={false}
                bounces={false}
                bouncesZoom={false}
            >
                <View style={styles.viewHeader}>
                    <TouchableOpacity style={styles.btnTouchableSearch} >
                        <Text style={styles.txtSearch}>Search Cashback, Stores, Categories</Text>
                        <View style={{ flex: 1, alignItems: "flex-end", paddingRight: 15 }}>
                            <FeatherIcon
                                name="search"
                                size={22}
                                color="#37d67a"
                            />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.SliderView}>
                        <CarouselCards />
                    </View>
                </View>
                <View style={{ marginHorizontal: 7 }} >

                    {/* <Button onPress={defaultStore} title="Click" /> */}
                    <HomeMain categoryTitle="Stores" api={apiDataStores} getData={getStoreDataById} />

                    <View style={{ height: 140, width: "100%" }}>

                        {
                            state.loader ? <CardLoaders /> : <FlatList
                                horizontal
                                keyExtractor={(item, index) => (index.toString())}
                                data={store?.stores}
                                showsHorizontalScrollIndicator={false}
                                style={{ marginBottom: 10 }}
                                renderItem={({ item, index }) => {
                                    return (

                                        <TouchableOpacity onPress={() => { navigation.navigate("StoreDetail", { item: item }); }} style={[styles.rootView, { backgroundColor: COLORS_SETS[0][index] }]}>
                                            <View style={{ margin: 10, marginTop: 10 }}>
                                                <View style={[styles.imageStyle, styles.imageContainer]} >
                                                    <Image
                                                        style={styles.imageStyle}
                                                        source={{
                                                            uri: item?.logo,
                                                        }}
                                                    />
                                                </View>
                                                <Text style={styles.titleStyle} >{item?.name}</Text>
                                                <Text style={styles.offerStyle} >{item?.cashback_string}</Text>
                                            </View>
                                        </TouchableOpacity>

                                        // <Card data={item?.name} ModalContent={ModalContentHandler} modalToggle={ModalHandler} allData={item} backgroundColor={COLORS_SETS[0][index]} />
                                    )
                                }}
                            />
                        }
                    </View>

                    <HomeMain categoryTitle="View Offers By Categories" api={apiDataOffers} getData={getOfferDataById} />
                    <View style={{ height: 140, width: "100%" }}>
                        {
                            state.loader ? <CardLoaders /> : <FlatList
                                horizontal
                                keyExtractor={(item, index) => (index.toString())}
                                data={offer?.coupons}
                                showsHorizontalScrollIndicator={false}
                                style={{ marginBottom: 10 }}
                                renderItem={({ item, index }) => {

                                    return (
                                        <Card data={item?.store?.name} ModalContent={ModalContentHandler} modalToggle={ModalHandler} allData={item} backgroundColor={COLORS_SETS[1][index]} detailsHandler={offerDetailsHandler} />
                                    )
                                }}
                            />
                        }
                    </View>

                    <HomeMain categoryTitle="Deals" api={apiDataDeals} getData={getDealDataById} />
                    <View style={{ height: 140, width: "100%" }}>
                        {
                            state.loader ? <CardLoaders /> : <FlatList
                                horizontal
                                keyExtractor={(item, index) => (index.toString())}
                                data={deal?.deals}
                                showsHorizontalScrollIndicator={false}
                                style={{ marginBottom: 10 }}
                                renderItem={({ item, index }) => {

                                    return (
                                        <Card data={item?.store?.name} ModalContent={ModalContentHandler} modalToggle={ModalHandler} allData={item} backgroundColor={COLORS_SETS[2][index]} detailsHandler={dealDetailsHandler} />
                                    )
                                }}
                            />
                        }
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    viewHeader: {
        height: perHeight,
        backgroundColor: '#37d67a',
        paddingHorizontal: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        // borderTopRightRadius: 10
    },
    btnTouchableSearch: {
        backgroundColor: "white",
        height: perSearch,
        borderRadius: 10,
        //justifyContent: "center",
        flexDirection: "row",
        alignItems: "center"
    },
    txtSearch: {
        paddingLeft: 20,
        color: "grey",
        paddingRight: 20
    },
    SliderView: {
        height: perSlider,
        width: "100%",
        backgroundColor: "#37d67a",
        marginVertical: 10,
        borderRadius: 10
    },
    ModalStyle: {
        height: 100,
        width: 100,
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: "blue"
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
    },
    rootView: {
        height: 120,
        width: 170,
        borderRadius: 10,
        marginRight: 10,
        paddingTop: 5,
        // elevation: 1,
    },
})