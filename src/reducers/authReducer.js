import axios from 'axios';

const authReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return {
                ...state,
                isAuthenticated: true,
                user: response.data.user
            };
        case "LOGIN_ERROR":
            return {
                ...state,
                isAuthenticated: false,
                user: null
            };
        case "LOGOUT":
            return {
                ...state,
                isAuthenticated: false,
                user: null
            };
        default:
            return state;
    }
}

export {
    authReducer
}