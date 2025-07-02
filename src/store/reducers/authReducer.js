import { socialAPI } from "../../api/api";

const SET_AUTH_DATA = 'SET_AUTH_DATA';
const LOGOUT = 'LOGOUT';
const SET_ERROR = 'SET_ERROR';

const initState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    error: null
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA: {
            return {
                ...state,
                ...action.payload,
                isAuth: true,
                error: null
            }
        }
        case LOGOUT: {
            return {
                ...initState
            }
        }
        case SET_ERROR: {
            return {
                ...state,
                error: action.payload
            }
        }
        default:
            return state
    }
}

export const setAuthDataAC = (userId, email, login) => ({
    type: SET_AUTH_DATA,
    payload: { userId, email, login }
})

export const logoutAC = () => ({ type: LOGOUT })
export const setErrorAC = (error) => ({ type: SET_ERROR, payload: error })

export const loginThunkCreator = (email, password, rememberMe) => {
    return (dispatch) => {
        socialAPI.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    const userId = response.data.data.userId;

                    socialAPI.getProfile(userId)
                        .then(profileResponse => {
                            const { fullName: login, contacts: { email } } = profileResponse.data;

                            dispatch(setAuthDataAC(userId, email, login));

                            localStorage.setItem('authData', JSON.stringify({
                                userId,
                                email,
                                login,
                                isAuth: true
                            }));

                        });
                } else {
                    const errorMessage = response.data.messages[0] || 'Login failed';
                    dispatch(setErrorAC(errorMessage));
                }
            })
            .catch(() => {
                dispatch(setErrorAC('Network error'));
            });
    };
};

export const logoutThunkCreator = () => {
    return (dispatch) => {
        socialAPI.logout()
            .then(() => {
                dispatch(logoutAC())
                localStorage.removeItem('authData')
            })
    }
}

export const initializeAuthThunkCreator = () => {
    return (dispatch) => {
        const authData = localStorage.getItem('authData')
        if (authData) {
            const { userId, email, login } = JSON.parse(authData)
            dispatch(setAuthDataAC(userId, email, login))
        }
    }
}

export default authReducer