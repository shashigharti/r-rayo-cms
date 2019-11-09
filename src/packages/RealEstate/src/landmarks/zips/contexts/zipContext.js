import React, { createContext, useReducer, useEffect } from 'react';
import { zipReducer } from '../reducers/zipReducer';

export const ZipContext = createContext();
const initialState = {
  zips: [],
};
const ZipContextProvider = props => {
  const [zips, dispatch] = useReducer(zipReducer, initialState, () => {
    const localData = localStorage.getItem('zips');
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem('zips', JSON.stringify(zips));
  }, [zips]);
  return <ZipContext.Provider value={{ zips, dispatch }}>{props.children}</ZipContext.Provider>;
};

export default ZipContextProvider;
