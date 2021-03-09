import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, Dimensions, TextInput } from 'react-native';
import { AppImages } from '../../Assets/Images'
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { connect } from 'react-redux';
import { getUserLoginRequest } from '../../Redux/Actions/PublicUserAction';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AccessToken, LoginManager } from 'react-native-fbsdk';
import Toast, { DURATION } from 'react-native-easy-toast'

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
const perBottomHeight = (height * 70) / 100;
const perTopHeight = (height * 30) / 100;
const _perTopHeight = (height * 15) / 100;
const perLoginConatinerHeight = (height * 6.5) / 100;
const perLoginConatinerWidth = (width * 70) / 100;

let toastRef;
class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            isSecure: true,
        }
    }

    signInHandler = () => {
        const obj = {
            email: this.state.username,
            password: this.state.password
        }
        this.props.getUserLoginRequest(obj);
    }

    isSecureHandler = () => {
        this.setState((prevData) => {
            return {
                isSecure: !prevData.isSecure
            }
        })
    }

    _retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem('userToken');
            if (value !== null) {

                console.log("TokenFromAsync", value);
            }
        } catch (error) {
            // Error retrieving data
        }
    };

    FBLogin = () => {
        LoginManager.logInWithPermissions(["public_profile", "email"]).then(
            function (result) {
                if (result.isCancelled) {
                    console.log("Login cancelled");
                    toastRef.show("Login cancelled");
                } else {
                    AccessToken.getCurrentAccessToken().then(
                        (data) => {
                            //console.log(data.accessToken.toString());

                            fetch('https://graph.facebook.com/v2.5/me?fields=email,first_name,last_name,friends&access_token=' + data.accessToken.toString())
                                .then((res) => {
                                    return res.json();
                                }).then((data) => {
                                    console.log("Data:", data);
                                }).catch((e) => {
                                    console.log("Error:", e);

                                });
                        }
                    )
                }
            },
            function (error) {
                console.log("Login fail with error: " + error);
            }
        );
    }

    render() {
        return (
            <KeyboardAwareScrollView enableOnAndroid={true} extraHeight={_perTopHeight} >
                <View style={styles.rootView} >
                    <View style={styles.imageContainer}>
                        <Image
                            source={AppImages.auth_bg_image}
                        />
                    </View>
                    <View style={styles.bottomContainer}>
                        <TouchableOpacity style={styles.cancleButton} onPress={() => { this.props.navigation.goBack() }} >
                            <AntDesignIcon
                                name="closecircleo"
                                size={20}
                                color="rgb(218,150,113)"
                            />
                        </TouchableOpacity>
                        <View style={styles.welcomeTextContainer} >
                            <Text style={styles.welcomeText} >Welcome Back</Text>
                        </View>
                        <View style={styles.loginWithRootView} >
                            <View style={styles.loginWithContainer} >
                                <View style={styles.loginWithTextContainer} >
                                    <Text style={{ fontWeight: "bold", fontSize: 12 }} >Login With</Text>
                                </View>
                                <View style={styles.iconRootView}>
                                    <TouchableOpacity style={styles.iconContainer} onPress={this.FBLogin} >
                                        <Image
                                            source={AppImages.facebook_sign_in_icon}
                                            style={{ height: 18, width: 9, alignSelf: "center" }}
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.iconContainer} >
                                        <Image
                                            source={AppImages.google_sign_in_icon}
                                            style={{ height: 18, width: 17, alignSelf: "center" }}
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.iconContainer} >
                                        <Image
                                            source={AppImages.apple_sign_in_icon}
                                            style={{ height: 18, width: 15, alignSelf: "center" }}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: 25, justifyContent: "center" }} >
                            <View style={{ alignSelf: "center", backgroundColor: "lightgrey", height: 1, width: (perLoginConatinerWidth / 2) - 40 }} ></View>
                            <View style={{ marginHorizontal: 10 }} >
                                <Text style={{ color: "grey" }} >OR</Text>
                            </View>
                            <View style={{ alignSelf: "center", backgroundColor: "lightgrey", height: 1, width: (perLoginConatinerWidth / 2) - 40 }} ></View>
                        </View>
                        <View style={{ marginLeft: 40 }}>
                            <Text>Email</Text>
                        </View>
                        <View style={[styles.input_text, { justifyContent: "center", }]}>
                            <TextInput onChangeText={(data) => this.state.username = data} style={{ marginLeft: 10, }} />
                        </View>
                        <View style={{ marginLeft: 40, marginTop: 10 }}>
                            <Text>Password</Text>
                        </View>
                        <View style={[{ marginHorizontal: 40, height: 40, backgroundColor: "white", elevation: 5, borderRadius: 10, marginTop: 7, flexDirection: "row" }, styles.input_text]}>
                            <View style={[{ flex: 1, justifyContent: "center" }]}>
                                <TextInput style={{ marginLeft: 10, justifyContent: "center" }} secureTextEntry={this.state.isSecure} onChangeText={(data) => this.state.password = data} />
                            </View>
                            <TouchableOpacity onPress={() => { this.isSecureHandler() }} style={{ shadowColor: 'lightgrey', shadowOffset: { height: 3, width: 0.5 }, shadowOpacity: 1, justifyContent: "center", marginRight: 10 }}>
                                {this.state.isSecure == true ?
                                    <EntypoIcon
                                        name="eye-with-line"
                                        size={20}
                                        color="rgb(218,150,113)"
                                    /> :
                                    <EntypoIcon
                                        name="eye"
                                        size={20}
                                        color="rgb(218,150,113)"
                                    />
                                }
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={this._retrieveData} >
                                <Text style={{ fontSize: 10, color: "grey", alignSelf: "flex-end", marginHorizontal: 40, marginTop: 5 }} >Forget Password</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity
                            style={{
                                height: 40, marginHorizontal: 40, backgroundColor: 'rgb(218,150,113)', borderRadius: 20, marginTop: 15, justifyContent: "center", elevation: 5, shadowColor: 'lightgrey',
                                shadowOffset: { height: 3, width: 0.5 },
                                shadowOpacity: 1,
                            }}
                            onPress={this.signInHandler}
                        >
                            <Text style={{ alignSelf: "center", color: "white" }} >Sign In</Text>
                        </TouchableOpacity>
                        <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 15 }}>
                            <Text>Don't have an account? </Text>
                            <TouchableOpacity onPress={() => { console.log("UserLoginLog:", this.props.getLoginStatus) }} >
                                <Text style={{ color: 'rgb(218,150,113)' }} >Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Toast
                        ref={(toast) => toastRef = toast}
                        style={{ backgroundColor: '#303030' }}
                        position='bottom'
                        positionValue={80}
                        opacity={1}
                        textStyle={{ color: 'white' }}
                    />
                </View>
            </KeyboardAwareScrollView>
        )
    }
}

const x = (state) => {
    return {
        getLoginStatus: state.UserLoginReducer
    }
}
const y = (dispatch) => {
    return {
        getUserLoginRequest: (obj) => dispatch(getUserLoginRequest(obj))
    }
}

export default connect(x, y)(Login);

const styles = StyleSheet.create({
    rootView: {
        flex: 1
    },
    imageContainer: {
        height: perTopHeight,

    },
    bottomContainer: {
        height: perBottomHeight,
        backgroundColor: "white",
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        elevation: 20,

    },
    cancleButton: {
        alignSelf: "flex-end",
        margin: 10
    },
    welcomeTextContainer: {

    },
    welcomeText: {
        alignSelf: "center",
        fontWeight: '500',
        fontSize: 17
    },
    loginWithRootView: {
        height: perLoginConatinerHeight,
        width: perLoginConatinerWidth,
        backgroundColor: "white",
        alignSelf: "center",
        borderRadius: 30,
        elevation: 5,
        marginTop: 10,
        shadowColor: 'lightgrey',
        shadowOffset: { height: 3, width: 0.5 },
        shadowOpacity: 1,

    },
    loginWithContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        //alignSelf: "center",
        flex: 1,
        //backgroundColor: 'yellow'

    },
    iconContainer: {
        height: 35,
        width: 35,
        backgroundColor: "white",
        elevation: 6,
        borderRadius: 50,
        alignSelf: "center",
        justifyContent: "center",
        marginRight: 20,
        shadowColor: 'lightgrey',
        shadowOffset: { height: 3, width: 0.5 },
        shadowOpacity: 1,
    },
    iconRootView: {
        flexDirection: "row",
        // alignItems: 'flex-end',
        //justifyContent: "space-between",
        // backgroundColor: 'blue'
    },
    loginWithTextContainer: {
        alignSelf: "center",
        // backgroundColor: 'black'
        // margin: 25
    },
    input_text: {
        marginHorizontal: 40,
        height: 40,
        backgroundColor: "white",
        elevation: 5,
        shadowColor: 'lightgrey',
        shadowOffset: { height: 3, width: 0.5 },
        shadowOpacity: 1,
        borderRadius: 10,
        marginTop: 7,

    }
})