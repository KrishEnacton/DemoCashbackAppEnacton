import { call, takeEvery, put, all } from 'redux-saga/effects';
import * as allActions from '../Actions';
import { getUserLoginSuccess, getAllCategorySuccess, getParentCategorySuccess } from '../Actions/PublicUserAction';
import api from '../../Apis';

export function* allWatcher() {
    yield all([
        takeEvery(allActions.PUBLIC_USER_API, getApiData),
        takeEvery(allActions.PUBLIC_USER_STORES, getStoreApiData),
        takeEvery(allActions.USER_LOGIN_REQUEST, getUserLoginRequest_saga),
        takeEvery(allActions.ALL_CATEGORY_REQUEST, getCategoryAction),
    ])
}

//Saga-1 Start
export function* getAction() {
    try {
        yield takeEvery(allActions.PUBLIC_USER_API, getApiData);
    } catch (e) {
        console.log("Error : ", e);
    }
}

function* getApiData() {
    try {
        const res = yield call(getApiDataFun);
        //console.log("Res : ", res);
        yield put({ type: allActions.PUBLIC_USER_API_SUCCESS, payload: res })
    } catch (e) {
        console.log("Error:", e);
    }
}

const getApiDataFun = () => {
    const data = api.get("/public/home")
    return data;
    //return "Krishna";
}
//Saga-1 End

//Saga-2 Start
export function* getStoreAction() {
    try {
        //yield console.log("StoreSaga");
        yield takeEvery(allActions.PUBLIC_USER_STORES, getStoreApiData);
    } catch (e) {
        console.log("Error : ", e);
    }
}

function* getStoreApiData() {
    try {
        const res = yield call(getStoreApiDataFun);
        //console.log("Res : ", res);
        yield put({ type: allActions.PUBLIC_USER_STORES_SUCCESS, payload: res })
    } catch (e) {
        console.log("Error:", e);
    }
}

const getStoreApiDataFun = () => {
    const data = api.get("/public/home")
    return data;
    //return "Krishna";
}
//Saga-2 End

//Saga-3 Start
export function* getUserLoginAction() {
    try {
        yield takeEvery(allActions.USER_LOGIN_REQUEST, getUserLoginRequest_saga);
    } catch (e) {
        console.log("Error : ", e);
    }
}

function* getUserLoginRequest_saga(data) {
    try {
        const res = yield call(getToken, data);
        //console.log("Res:", res);
        yield put(getUserLoginSuccess(res.data));
    } catch (e) {
        console.log("Error:", e);
    }
}

const getToken = (payload) => {
    //console.log("Payload:", payload.payload);
    const data = api.get("/auth/csrf-token").then((data) => {
        const val = {
            ...payload.payload,
            _token: data
        }
        return api.post("/auth/login", val, {});
    });

    return data;
}
//Saga-3 End

//Saga-4 Start
export function* getCategoryAction() {
    try {
        //yield console.log("StoreSaga");
        yield takeEvery(allActions.ALL_CATEGORY_REQUEST, getCategoryRequest);
    } catch (e) {
        console.log("Error : ", e);
    }
}

function* getCategoryRequest() {
    try {
        const res = yield call(getAllCategory);
        // console.log("Res : ", res.data);
        var res_data = [];
        for (const key of res.data) {
            if (key.parent_id == null) {
                res_data.push(key);
            }
        }
        // console.log("All datA", res.data)
        // console.log("Parentdata", res_data)
        yield put(getParentCategorySuccess(res_data));
        yield put(getAllCategorySuccess(res.data))
    } catch (e) {
        console.log("Error:", e);
    }
}

const getAllCategory = () => {
    const data = api.get("/public/categories/store").then((data) => {
        return data.data;
    })
    return data;
    //return "Krishna";
}
//Saga-4 End