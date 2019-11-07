const AuthReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return {
                ...state,
                isAuthenticated: action.status,
                user: action.user
            };
        case "LOGIN_ERROR":
            return {
                ...state,
                isAuthenticated: action.status,
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
    AuthReducer
}