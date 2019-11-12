import React, { createContext, useReducer, useEffect } from 'react';
import { GroupReducer } from '../reducers/GroupReducer';

export const GroupContext = createContext();
const initialState = {
  agents: [],
};
const GroupContextProvider = props => {
  const [groups, dispatch] = useReducer(GroupReducer, initialState, () => {
    const localData = localStorage.getItem('groups');
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem('groups', JSON.stringify(groups));
  }, [groups]);
  return (
    <GroupContext.Provider value={{ groups, dispatch }}>{props.children}</GroupContext.Provider>
  );
};

export default GroupContextProvider;
