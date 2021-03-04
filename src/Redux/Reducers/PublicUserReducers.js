// import {} from 'react-redux';
import * as Actions from '../Actions';

const initState = {
    data: [],
    loader: true
}

export default PublicUserReducer = (state = initState, action) => {
    switch (action.type) {
        case Actions.PUBLIC_USER_API_SUCCESS:
            //console.log("Data:", action.payload);
            return {
                ...state,
                data: action.payload,
                loader: false
            }

        default:
            //console.log("Default called");
            return state;
            break;
    }
}
