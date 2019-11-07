const PageReducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return {
                ...state,
                isAuthenticated: action.status
            };
        case "EDIT":
            return {
                ...state,
                isAuthenticated: action.status
            };
        case "DELETE":
            return {
                ...state,
                isAuthenticated: false
            };
        default:
            return state;
    }
}

export {
    PageReducer
}