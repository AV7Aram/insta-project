import { socialAPI } from "../../api/api";

const GET_PROFILE = 'GET_PROFILE';

const initState = {
    profile : null,
}

const profileReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_PROFILE': {
            return {
                ...state,
                profile: action.payload
            }
        }
        default:
            return state
    }
}

export const profileAC = (profile) => ({ type: 'SET_PROFILE', payload: profile })

export const getProfileThunkCreator = (id) => {
    return (dispatch) => {
        socialAPI.getProfile(id)
            .then((res) => {
                dispatch(profileAC(res.data))
            })
            .catch((error) => {
                console.error("Error fetching profile:", error);
            });
    }
}

export default profileReducer;