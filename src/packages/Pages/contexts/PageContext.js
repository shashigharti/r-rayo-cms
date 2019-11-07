import React, { createContext, useReducer, useEffect } from 'react';
import { PageReducer } from '../reducers/PageReducer';

export const PageContext = createContext();
const initialState = {
    pages: []
};
const PageContextProvider = (props) => {
    const [pages, dispatch] = useReducer(PageReducer, initialState, () => {
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