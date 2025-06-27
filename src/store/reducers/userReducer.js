import { socialAPI } from "../../api/api";

const GET_USERS = 'GET_USERS';
const IS_LOADING = 'IS_LOADING';

const initState = {
    users: [],
    isLoading: false,
}

const usersReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_USERS: {
            return {
                ...state,
                users: action.payload
            }
        }
        case IS_LOADING: {
            return {
                ...state,
                isLoading: action.payload
            }
        }
        default:
            return state
    }
}

export const getUsersAC = (data) => ({ type: GET_USERS, payload: data })
export const isLoadingAC = (bool) => ({ type: IS_LOADING, payload: bool })

export const getUsersThunkCreator = () => {
    return (dispatch) => {
        dispatch(isLoadingAC(true))
        socialAPI.getUsers()
            .then((res) => {
                dispatch(getUsersAC(res.data.items))
                dispatch(isLoadingAC(false))
            })
            .catch(error => {
                console.error("Error fetching users:", error)
            })
    }
}

export default usersReducer