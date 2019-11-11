import React, { createContext, useReducer, useEffect } from 'react';
import { UserReducer } from '../reducers/UserReducer';

export const UserContext = createContext();
const initialState = {
  users: [],
};
const UserContextProvider = props => {
  const [users, dispatch] = useReducer(UserReducer, initialState, () => {
    const localData = localStorage.getItem('users');
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);
  return <UserContext.Provider value={{ users, dispatch }}>{props.children}</UserContext.Provider>;
};

export default UserContextProvider;
