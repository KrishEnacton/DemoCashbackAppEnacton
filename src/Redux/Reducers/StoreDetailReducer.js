import * as Actions from '../Actions';

const initState = {
    data: [],
    loader: true,
}

export default StoreDetailReducer = (state = initState, action) => {
    switch (action.type) {
        case Actions.STORE_DETAIL_SUCCESS: {
            //console.log("CategoryData:", action.payload);

            return {
                ...state,
                data: action.payload,
                loader: false
            }
        }

        default:
            return state;
    }
}
