import React, { createContext, useReducer, useEffect } from 'react';
import { leadReducer } from '../reducers/leadReducer';

export const LeadContext = createContext();
const initialState = {
  leads: [],
};
const LeadContextProvider = props => {
  const [leads, dispatch] = useReducer(leadReducer, initialState, () => {
    const localData = localStorage.getItem('leads');
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem('leads', JSON.stringify(leads));
  }, [leads]);
  return <LeadContext.Provider value={{ leads, dispatch }}>{props.children}</LeadContext.Provider>;
};

export default LeadContextProvider;
