import React, { createContext, useReducer, useEffect } from 'react';
import { authReducer } from '../reducers/authReducer';

export const authContext = createContext();

export const AuthContextProvider = (props) => {
    const [user, dispatch] = useReducer(authReducer, [], () => {
        const localData = localStorage.getItem('user');
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