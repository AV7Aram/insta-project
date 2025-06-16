import { createStore, combineReducers } from "redux";
import usersReducer from "./reducers/userReducer";


const rootReducer = combineReducers({
    usersPage : usersReducer
})


export const store = createStore(rootReducer)
