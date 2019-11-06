import React, { createContext, useReducer, useEffect } from 'react';
import { pageReducer } from '../reducers/pageReducer';

export const PageContext = createContext();
const initialState = {
    pages: []
};
const PageContextProvider = (props) => {
    const [pages, dispatch] = useReducer(pageReducer, initialState, () => {
        const localData = localStorage.getItem('pages');
        return localData ? JSON.parse(localData) : [];
    });
    useEffect(() => {
        localStorage.setItem('pages', JSON.stringify(pages));
    }, [pages]);
    return (
        <PageContext.Provider value={{ pages, dispatch }}>
            {props.children}
        </PageContext.Provider>
    );
}

export default PageContextProvider