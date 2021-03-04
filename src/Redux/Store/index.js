import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../Reducers'
import createSagaMiddleware from 'redux-saga'
import { allWatcher } from '../Sagas/PublicUserSaga'
const sagaMiddleware = createSagaMiddleware();

export default store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(allWatcher);