import { combineReducers } from 'redux';
import PublicUserReducer from './PublicUserReducers';
import PublicUserStoreReducer from './PublicUserStoreReducer';
import UserLoginReducer from './UserLoginReducer';
import AllCategoryReducer from './AllCategoryReducer';

export default rootReducer = combineReducers({
    PublicUserReducer,
    PublicUserStoreReducer,
    UserLoginReducer,
    AllCategoryReducer
})