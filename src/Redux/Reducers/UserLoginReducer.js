import * as Actions from '../Actions';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initState = {
    data: null,
    isLogin: false
}

export default UserLoginReducer = (state = initState, action) => {
    switch (action.type) {
        case Actions.USER_LOGIN_SUCCESS:
            //console.log("Reducer:", action);
            if (action.payload.error == 0) {
                _storeData = async () => {
                    try {
                        await AsyncStorage.setItem(
                            'userToken',
                            action.payload.data
                        );
                    } catch (error) {
                        console.log("Error in Asyncstore", error);
                    }
                };
                _storeData();
                return {
                    ...state,
                    data: action.payload.data,
                    isLogin: true
                }
            }
            else {
                return {
                    ...state,
                    data: null,
                    isLogin: false
                }
            }
            return state;
        default:
            //console.log("Default called");
            return state;
            break;
    }
}
