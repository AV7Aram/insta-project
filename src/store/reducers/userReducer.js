import { socialAPI } from "../../api/api";

const GET_USERS = 'GET_USERS';
const IS_LOADING = 'IS_LOADING';
const CHANGE_PAGE = 'CHANGE_PAGE';
const TOTAL_COUNT = 'TOTAL_COUNT';

const initState = {
    users: [],
    isLoading: false,
    totalCount: 1000,
    totalPageCount: 100,
    page: 1
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
        case CHANGE_PAGE: {
            return {
                ...state,
                page: action.payload
            }
        }
        case TOTAL_COUNT: {
            return {
                ...state,
                totalCount: action.payload
            }
        }
        default:
            return state
    }
}

export const getUsersAC = (data) => ({ type: GET_USERS, payload: data })
export const isLoadingAC = (bool) => ({ type: IS_LOADING, payload: bool })
export const changePageAC = (page) => ({ type: CHANGE_PAGE, payload: page })
export const totalCountAC = (count) => ({ type: TOTAL_COUNT, payload: count })

export const getUsersThunkCreator = (page) => {
    return (dispatch) => {
        dispatch(isLoadingAC(true))
        socialAPI.getUsers(page)
            .then((res) => {
                dispatch(getUsersAC(res.data.items))
                dispatch(isLoadingAC(false))
                dispatch(totalCountAC(res.data.totalCount))
            })
            .catch(error => {
                console.error("Error fetching users:", error)
            })
    }
}

export default usersReducer