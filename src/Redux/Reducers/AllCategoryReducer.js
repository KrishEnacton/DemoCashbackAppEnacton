// import {} from 'react-redux';
import { act } from 'react-test-renderer';
import * as Actions from '../Actions';

const initState = {
    data: [],
    loader: true,
    parentData: []
}

export default AllCategoryReducer = (state = initState, action) => {
    switch (action.type) {
        case Actions.PARENT_CATEGORY_SUCCESS:
            //console.log("Data:", action.payload);
            return {
                ...state,
                parentData: action.payload,
                loader: false
            }
        case Actions.ALL_CATEGORY_SUCCESS: {
            return {
                ...state,
                data: action.payload,
                loader: false
            }
        }

        default:
            //console.log("Default called");
            return state;
            break;
    }
}
