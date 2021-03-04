// import {} from 'react-redux';
import * as Actions from '../Actions';

const initState = {
    data: []
}

export default PublicUserStoreReducer = (state = [], action) => {
    switch (action.type) {
        case Actions.PUBLIC_USER_STORES:
            // console.log("Data:", action.payload);
            return state;

        case Actions.PUBLIC_USER_STORES_SUCCESS:
            return state;

        default:
            return state;
    }
}
