import React, { createContext, useReducer, useEffect } from 'react';
import { MenuReducer } from '../reducers/MenuReducer';

export const MenuContext = createContext();
const initialState = {
  menus: [],
};
const MenuContextProvider = props => {
  const [menus, dispatch] = useReducer(MenuReducer, initialState, () => {
    const localData = localStorage.getItem('menus');
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem('menus', JSON.stringify(menus));
  }, [menus]);
  return <MenuContext.Provider value={{ menus, dispatch }}>{props.children}</MenuContext.Provider>;
};

export default MenuContextProvider;
