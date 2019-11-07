import React, { createContext, useReducer, useEffect } from 'react';
import { GlobalReducer } from '../reducers/GlobalReducer';

export const GlobalContext = createContext();
const initialState = {
    breadcrumbs: [{
        name: 'Home',
        subPath: '',
        path: '',
    }]
};
const GlobalContextProvider = (props) => {
    const [g_app, dispatch] = useReducer(GlobalReducer, initialState, () => {
        const localData = localStorage.getItem('g_app');
        return localData ? JSON.parse(localData) : [];
    });
    useEffect(() => {
        localStorage.setItem('g_app', JSON.stringify(g_app));
    }, [GlobalReducer]);
    return (
        <GlobalContext.Provider value={{ g_app, dispatch }}>
            {props.children}
        </GlobalContext.Provider>
    );
}

export default GlobalContextProvider