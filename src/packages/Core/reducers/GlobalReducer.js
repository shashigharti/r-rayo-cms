const GlobalReducer = (state, action) => {
    switch (action.type) {
        case "ADD_BREADCRUMB":
            return [...state, {
                name: action.breadcrumb.name,
                subpath: action.breadcrumb.subPath,
                path: action.breadcrumb.path,
            }
            ]
        default:
            return state;
    }
}

export {
    GlobalReducer
}