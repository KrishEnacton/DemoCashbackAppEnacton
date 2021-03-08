import { call, takeEvery, put, all } from 'redux-saga/effects';
import * as allActions from '../Actions';
import { getUserLoginSuccess, getAllCategorySuccess, getParentCategorySuccess, getStoreDetailSuccess } from '../Actions/PublicUserAction';
import api from '../../Apis';

export function* allWatcher() {
    yield all([
        takeEvery(allActions.PUBLIC_USER_API, getApiData),
        takeEvery(allActions.PUBLIC_USER_STORES, getStoreApiData),
        takeEvery(allActions.USER_LOGIN_REQUEST, getUserLoginRequest_saga),
        takeEvery(allActions.ALL_CATEGORY_REQUEST, getCategoryRequest),
        takeEvery(allActions.STORE_DETAIL_REQUEST, getStoreDetailRequest),
    ])
}

//Saga-1 Start

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

//Saga-5 Start

function* getStoreDetailRequest() {
    try {
        const res = yield call(getStoreDetail);
        yield put(getStoreDetailSuccess(res));
    } catch (e) {
        console.log("Error:", e);
    }
}

const getStoreDetail = () => {
    const data = api.get("/public/app/stores").then((data) => {
        return data.data;
    })
    return data;
}
//Saga-5 End