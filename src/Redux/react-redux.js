import {missionsReducer} from "./missionsReducer";
import {applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from "redux";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    missions: missionsReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store