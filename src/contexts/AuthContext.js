import React, { createContext, useReducer, useEffect } from 'react';
import { authReducer, initialState } from '../reducers/authReducer';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const [state, dispatch] = useReducer(authReducer, initialState, () => {
        const localData = localStorage.getItem('auth');
        return localData ? JSON.parse(localData) : [];
    });
    useEffect(() => {
        localStorage.setItem('auth', JSON.stringify(state));
    }, [state]);
    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider