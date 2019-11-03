const authReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.user,
                token: action.payload.token
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