const GET_USERS = 'GET_USERS';

const initState = {
    users: [],
}

const usersReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_USERS: {
            return {
                ...state,
                users: action.payload
            }
        }
        default:
            return state
    }
}

export const getUsersAC = (data) => ({ type: GET_USERS, payload: data })

export default usersReducer