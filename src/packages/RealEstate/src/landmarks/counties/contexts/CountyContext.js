import React, { createContext, useReducer, useEffect } from 'react';
import { CountyReducer } from '../reducers/CountyReducer';

export const CountyContext = createContext();
const initialState = {
  counties: [],
};
const CountyContextProvider = props => {
  const [counties, dispatch] = useReducer(CountyReducer, initialState, () => {
    const localData = localStorage.getItem('counties');
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem('counties', JSON.stringify(counties));
  }, [counties]);
  return (
    <CountyContext.Provider value={{ counties, dispatch }}>{props.children}</CountyContext.Provider>
  );
};

export default CountyContextProvider;
