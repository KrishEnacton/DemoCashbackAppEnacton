import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Platform,
    FlatList,
    Dimensions,
    TouchableOpacity,
    Image
} from 'react-native';
import { connect } from 'react-redux';
import { getStoreDetailRequest } from '../../Redux/Actions/PublicUserAction';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { SafeAreaProvider, useSafeAreaInsets, SafeAreaView } from 'react-native-safe-area-context';
import StoreDetailLoader, { CashbackLoader } from '../../Components/StoreDetailLoader';


const winHeight = Dimensions.get('window').height
const winWidth = Dimensions.get('window').width
const headerHeight = (winHeight * 15) / 100;
const cardHeight = (winHeight * 10) / 100;

class StoreDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            item: this.props.route.params.item,
            data: "",
            flag: 0
        }
    }

    componentDidMount() {
        this.props.dispatchStoreDetail()
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.data == prevState.data) {
            this.filterData()
        }
    }
    //insets = useSafeAreaInsets();

    filterData = () => {
        //console.log("Called");
        for (const item in this.props.storeDetail.data) {
            for (const val of this.props.storeDetail.data[item]) {
                if (val.id == this.state.item?.id) {
                    this.setState({
                        data: val
                    })
                }
            }
        }
    }

    render() {

        console.log("Data:", this.state.data);
        return (
            <View style={{ flex: 1 }}>
                <SafeAreaView style={{ flexDirection: "row", backgroundColor: "#37d67a", alignItems: "center" }} >
                    <TouchableOpacity onPress={() => { this.props.navigation.goBack() }}>
                        <FeatherIcon
                            name="chevron-left"
                            size={22}
                            color="black"
                            style={{ margin: 10 }}
                        />
                    </TouchableOpacity>
                    <View style={{ flex: 1, alignItems: "center" }} >
                        {this.state.data == "" ?
                            <CashbackLoader /> :
                            <Text>{this.state.data?.name}</Text>
                        }
                    </View>
                    <TouchableOpacity onPress={() => { }}>
                        <FeatherIcon
                            name="search"
                            size={22}
                            color="black"
                            style={{ margin: 10 }}
                        />
                    </TouchableOpacity>
                </SafeAreaView>
                <View style={{ backgroundColor: "#37d67a", height: 60, width: "100%", borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}></View>
                <View style={styles.headerCard}>
                    <View style={styles.imgView}>
                        {this.state.data == "" ?
                            <StoreDetailLoader /> :
                            <Image
                                source={{
                                    uri: this.state.data?.logo
                                }}
                                style={{ height: "99%", width: "99%", borderRadius: 10, alignSelf: "center" }}
                            />
                        }
                    </View>
                    <View style={{ alignSelf: "center" }}>
                        {this.state.data == "" ?
                            <CashbackLoader /> :
                            <Text style={{ color: "red" }}>{this.state.data?.cashback_string}</Text>
                        }
                    </View>
                    <TouchableOpacity style={{ justifyContent: "center", height: 30, width: (winWidth / 2), backgroundColor: "black", borderRadius: 20, alignSelf: "center" }}>
                        <Text style={{ textAlign: "center", color: "white" }}>Shop Now</Text>
                    </TouchableOpacity>
                    <View style={{ height: 30, flexDirection: "row", marginHorizontal: 10 }}>
                        <View style={{ flex: 0.5, alignSelf: "center", }}>
                            <Text style={{ color: "white" }}>How It Works</Text>
                        </View>
                        <View style={{ flex: 0.5, alignSelf: "center" }}>
                            <Text style={{ alignSelf: "flex-end", color: "white" }} >Terms & Conditions</Text>
                        </View>
                    </View>

                </View>
                <View style={styles.coupenContainer}>
                    <View style={styles.coupenInnerView} >
                        <Text>Tracked Within</Text>
                        <Text style={{ color: "grey" }}>{this.state.data.confirm_duration}</Text>
                    </View>
                    <View style={styles.coupenInnerView}>
                        <Text>Paid Within</Text>
                        <Text style={{ color: "grey" }}>{this.state.data?.confirm_days?.slice(0, -8)}</Text>
                    </View>
                    <View style={styles.coupenInnerView} >
                        <Text>Missing Cashback</Text>
                        {this.state.data == "" ?
                            <Text style={{ color: "grey" }}>Loading...</Text> :
                            this.state.data.is_claimable ?
                                <Text style={{ color: "grey" }} >Allowed ✔️</Text> :
                                <Text style={{ color: "red" }}>Not Allowed</Text>
                        }

                    </View>
                </View>
            </View>
        )
    }
}

const x = (state) => {
    return {
        storeDetail: state.StoreDetailReducer.data,
        loader: state.StoreDetailReducer.loader
    }
}

const y = (dispatch) => {
    return {
        dispatchStoreDetail: () => dispatch(getStoreDetailRequest())
    }
}

export default connect(x, y)(StoreDetail);

const styles = StyleSheet.create({
    headerCard: {
        backgroundColor: "#006b76",
        height: headerHeight + 50,
        width: (winWidth / 1.2),
        alignSelf: "center",
        top: 0 - (headerHeight / 1.3),
        borderRadius: 10,
        justifyContent: "space-evenly",
        // back
    },
    imgView: {
        height: 60,
        width: 120,
        backgroundColor: "white",
        alignSelf: "center",
        borderRadius: 10,
        marginTop: 10,

    },
    coupenContainer: {
        flexDirection: "row",
        top: 0 - (headerHeight / 1.3),
        marginTop: 10,
        alignItems: "center"
    },
    coupenInnerView: {
        flex: 1,
        alignItems: "center",
        borderRightColor: "grey",
        borderRightWidth: 1
    }
})