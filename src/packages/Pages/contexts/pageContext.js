import React, { createContext, useReducer, useEffect } from 'react';
import { pageReducer } from '../reducers/pageReducer';

export const PageContext = createContext();
const initialState = {
    isAuthenticated: false,
    user: null
};
const PageContextProvider = (props) => {
    const [auth, dispatch] = useReducer(pageReducer, initialState, () => {
        const localData = localStorage.getItem('pages');
        return localData ? JSON.parse(localData) : [];
    });
    useEffect(() => {
        localStorage.setItem('pages', JSON.stringify(auth));
    }, [auth]);
    return (
        <AuthContext.Provider value={{ auth, dispatch }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider