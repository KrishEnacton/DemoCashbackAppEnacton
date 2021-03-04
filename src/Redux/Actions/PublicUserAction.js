import * as allActions from './index';

export const getPublicUserApiData = () => {
    //console.log("Get User Action Called getPublicUserApiData");
    return {
        type: allActions.PUBLIC_USER_API,
    };
}

export const getPublicUserApiDataSuccess = (data) => {
    return {
        type: allActions.PUBLIC_USER_API_SUCCESS,
        payload: data
    };
}

export const getPublicUserApiStoreData = () => {
    // console.log("Get User Action Called getPublicUserApiStoreData");
    return {
        type: allActions.PUBLIC_USER_STORES,
    };
}

export const getPublicUserApiStoreDataSuccess = (data) => {
    return {
        type: allActions.PUBLIC_USER_STORES_SUCCESS,
        payload: data
    };
}

export const getUserLoginRequest = (data) => {
    //console.log("ActionCalled:", data);
    return {
        type: allActions.USER_LOGIN_REQUEST,
        payload: data
    }
}

export const getUserLoginSuccess = (token) => {
    //console.log("TOken:", token.error);
    return {
        type: allActions.USER_LOGIN_SUCCESS,
        payload: token
    }
}
export const getAllCategoryRequest = () => {
    //console.log("ActionCalled:", data);
    return {
        type: allActions.ALL_CATEGORY_REQUEST,
    }
}

export const getParentCategorySuccess = (data) => {
    //console.log("CategoryData:", data);
    return {
        type: allActions.PARENT_CATEGORY_SUCCESS,
        payload: data
    }
}

export const getAllCategorySuccess = (data) => {
    //console.log("CategoryData:", data);
    return {
        type: allActions.ALL_CATEGORY_SUCCESS,
        payload: data
    }
}

