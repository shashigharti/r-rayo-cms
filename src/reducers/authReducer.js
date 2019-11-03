export const authReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_USER':
            //Make an api call back
            return [...state, {
                user_name: action.user.user_name,
                email: action.user.email,
                password: action.user.password,
                first_name: action.user.first_name,
                last_name: action.user.last_name

            }
            ]
        case 'DELETE_USER':
            return state.filter(user => user.id !== user.id);
        default:
            return state;
    }
} 