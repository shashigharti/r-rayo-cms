import React, { createContext, useReducer, useEffect } from 'react';
import { authReducer } from '../reducers/authReducer';

export const AuthContext = createContext();
const initialState = {
    isAuthenticated: false,
    user: null
};
const AuthContextProvider = (props) => {
    const [auth, dispatch] = useReducer(authReducer, initialState, () => {
        const localData = localStorage.getItem('auth');
        return localData ? JSON.parse(localData) : [];
    });
    useEffect(() => {
        localStorage.setItem('auth', JSON.stringify(auth));
    }, [auth]);
    return (
        <AuthContext.Provider value={{ auth, dispatch }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider