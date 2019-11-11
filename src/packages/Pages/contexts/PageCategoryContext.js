import React, { createContext, useReducer, useEffect } from 'react';
import { CategoryReducer } from '../reducers/CategoryReducer';

export const PageCategoryContext = createContext();
const initialState = {
  all: [],
  current_page: null,
};
const PageCategoryContextProvider = props => {
  const [categories, dispatch] = useReducer(CategoryReducer, initialState, () => {
    const localData = localStorage.getItem('categories');
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem('categories', JSON.stringify(categories));
  }, [categories]);
  return (
    <PageCategoryContext.Provider value={{ categories, dispatch }}>
      {props.children}
    </PageCategoryContext.Provider>
  );
};

export default PageCategoryContextProvider;
