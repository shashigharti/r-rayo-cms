import React, { createContext, useReducer, useEffect } from 'react';
import { ZipReducer } from '../reducers/ZipReducer';

export const ZipContext = createContext();
const initialState = {
  zips: [],
};
const ZipContextProvider = props => {
  const [zips, dispatch] = useReducer(ZipReducer, initialState, () => {
    const localData = localStorage.getItem('zips');
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem('zips', JSON.stringify(zips));
  }, [zips]);
  return <ZipContext.Provider value={{ zips, dispatch }}>{props.children}</ZipContext.Provider>;
};

export default ZipContextProvider;
