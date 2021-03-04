import React from 'react';
import { View, Dimensions } from 'react-native';
import Modal from 'react-native-translucent-modal';
import HeaderMenu from '../HeaderMenu';
const height = Dimensions.get("window").height;

export default ModalMenu = ({ modalToggle, ModalHandler, ModelContent, heightPer, offerDetailsHandler, dealDetailsHandler, isHeaderMenu }) => {

    const perModalHeight = (height * heightPer) / 100;

    return (

        <Modal
            animationType={'fade'}
            transparent={true}
            visible={modalToggle}
            onRequestClose={() => { }}
        >
            <View style={{
                flex: 1,
                backgroundColor: '#000000AA',
                justifyContent: "flex-end",

            }}>
                {isHeaderMenu ?
                    <ModelContent ModalHandler={ModalHandler} /> :
                    offerDetailsHandler != "" ?
                        <ModelContent ModalHandler={ModalHandler} ModalData={offerDetailsHandler} /> :
                        dealDetailsHandler != "" ?
                            <ModelContent ModalHandler={ModalHandler} ModalData={dealDetailsHandler} /> :
                            null

                }

            </View>
        </Modal>
    )
}