import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import usersReducer from "./reducers/userReducer";
import profileReducer from "./reducers/profileReducer";


const rootReducer = combineReducers({
    usersPage: usersReducer,
    profilePage: profileReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));     
