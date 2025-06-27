import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import usersReducer from "./reducers/userReducer";


const rootReducer = combineReducers({
    usersPage: usersReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));     
