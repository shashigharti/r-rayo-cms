import React, { createContext, useReducer, useEffect } from 'react';
import { RoleReducer } from '../reducers/RoleReducer';

export const RoleContext = createContext();
const initialState = {
  roles: [],
};
const RoleContextProvider = props => {
  const [roles, dispatch] = useReducer(RoleReducer, initialState, () => {
    const localData = localStorage.getItem('roles');
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem('roles', JSON.stringify(roles));
  }, [roles]);
  return <RoleContext.Provider value={{ roles, dispatch }}>{props.children}</RoleContext.Provider>;
};

export default RoleContextProvider;
