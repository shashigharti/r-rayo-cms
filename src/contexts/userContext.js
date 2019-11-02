import React, { createContext, useReducer, useEffect } from 'react';
import { userReducer } from '../reducers/userReducer';

export const userContext = createContext();

const UserContextProvider = (props) => {
    const [user, dispatch] = useReducer(userReducer, [], () => {
        const localData = localStorage.getItem('user');
        return localData ? JSON.parse(localData) : [];
    });
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);
    return (
        <BookContext.Provider value={{ books, dispatch }}>
            {props.children}
        </BookContext.Provider>
    );
}

export default BookContextProvider;