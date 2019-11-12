import React, { createContext, useReducer, useEffect } from 'react';
import { TemplateReducer } from '../reducers/TemplateReducer';

export const TemplateContext = createContext();
const initialState = {
  templates: [],
};
const TemplateContextProvider = props => {
  const [templates, dispatch] = useReducer(TemplateReducer, initialState, () => {
    const localData = localStorage.getItem('templates');
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem('templates', JSON.stringify(templates));
  }, [templates]);
  return (
    <TemplateContext.Provider value={{ templates, dispatch }}>
      {props.children}
    </TemplateContext.Provider>
  );
};

export default TemplateContextProvider;
