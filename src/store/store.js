import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import loginReducer from "./reducers/loginReducer";
import searchReducer from "./reducers/searchReducer";
import favoriteReducer from "./reducers/favoriteReducer";

const rootReducer = combineReducers({
    login:loginReducer,
    search:searchReducer,
    favorite:favoriteReducer
})
export const store = createStore(rootReducer, applyMiddleware(thunk))
window.store =store