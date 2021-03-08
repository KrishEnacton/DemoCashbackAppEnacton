import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Platform,
    FlatList
} from 'react-native';
import { connect } from 'react-redux';
import { getStoreDetailRequest } from '../../Redux/Actions/PublicUserAction';

class StoreDetail extends React.Component {
    // console.log("Props:", route.params.item)
    constructor(props) {
        super(props);
        this.state = {
            item: this.props.route.params.item,
            data: [],
            flag: 0
        }
    }

    componentDidMount() {
        this.props.dispatchStoreDetail()
        //this.setState({ flag: 1 });
    }

    componentDidUpdate(prevProps, prevState) {

        console.log("PrevProps:", prevState.data);
        console.log("CurrProps:", this.state.data);

        if (this.props.storeDetail != prevState.data) {
            this.setState({
                data: this.props.storeDetail
            })
            console.log("Data:", this.props.storeDetail);
        }

        // if (this.state.data == prevState.data) {
        //     this.setState({
        //         data: this.props.storeDetail
        //     })
        //     console.log("Data:", this.props.storeDetail);
        // }

    }

    render() {
        // console.log("Data:", this.state.data?.data);
        return (
            <View style={styles.rootView}>
                <FlatList
                    keyExtractor={(item, index) => (index.toString())}
                    data={this.state.data?.data?.A}
                    renderItem={({ item, index }) => {
                        //console.log("Item:", item);
                        return (
                            <Text>{item.name}</Text>
                        )
                    }}
                />
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

})