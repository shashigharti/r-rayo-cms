import React, { createContext, useReducer, useEffect } from 'react';
import { SideMenuReducer } from '../reducers/SideMenuReducer';

export const SideMenuContext = createContext();
const initialState = {
  menus: [],
};

const SideMenuContextProvider = props => {
  const [menus, dispatch] = useReducer(SideMenuReducer, initialState, () => {
    const localData = localStorage.getItem('menus');
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem('menus', JSON.stringify(menus));
  }, [menus]);
  return (
    <SideMenuContext.Provider value={{ menus, dispatch }}>
      {props.children}
    </SideMenuContext.Provider>
  );
};

export default SideMenuContextProvider;
