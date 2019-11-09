import React, { createContext, useReducer, useEffect } from 'react';
import { cityReducer } from '../reducers/cityReducer';

export const CityContext = createContext();
const initialState = {
  cities: [],
};
const CityContextProvider = props => {
  const [cities, dispatch] = useReducer(cityReducer, initialState, () => {
    const localData = localStorage.getItem('cities');
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem('cities', JSON.stringify(cities));
  }, [cities]);
  return <CityContext.Provider value={{ cities, dispatch }}>{props.children}</CityContext.Provider>;
};

export default CityContextProvider;
