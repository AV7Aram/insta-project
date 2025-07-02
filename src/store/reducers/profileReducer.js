import { socialAPI } from "../../api/api";

const GET_PROFILE = 'GET_PROFILE';
const UPDATE_PHOTO = 'UPDATE_PHOTO';

const initState = {
    profile: null,
}

const profileReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_PROFILE: {
            return {
                ...state,
                profile: action.payload
            }
        }
        case UPDATE_PHOTO: {
            return {
                ...state,
                profile: {
                    ...state.profile,
                    photos: action.payload
                }
            }
        }


        default:
            return state
    }
}

export const profileAC = (profile) => ({ type: GET_PROFILE, payload: profile })
export const updatePhotoAC = (photos) => ({ type: UPDATE_PHOTO, payload: photos });

export const getProfileThunkCreator = (id) => {
    return (dispatch) => {
        socialAPI.getProfile(id)
            .then((res) => {
                dispatch(profileAC(res.data))
            })
    }
}

export const savePhoto = (file, id) => {
    return (dispatch) => {
        socialAPI.savePhoto(file)
            .then((res) => {
                console.log(res)
                dispatch(getProfileThunkCreator(id))
            })
    };
};

export default profileReducer;