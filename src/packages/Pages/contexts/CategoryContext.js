import React, { createContext, useReducer, useEffect } from 'react';
import { CategoryReducer } from '../reducers/CategoryReducer';

export const CategoryContext = createContext();
const initialState = {
  all: [],
  current_page: null,
};
const CategoryContextProvider = props => {
  const [categories, dispatch] = useReducer(CategoryReducer, initialState, () => {
    const localData = localStorage.getItem('categories');
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem('categories', JSON.stringify(categories));
  }, [categories]);
  return (
    <CategoryContext.Provider value={{ categories, dispatch }}>
      {props.children}
    </CategoryContext.Provider>
  );
};

export default CategoryContextProvider;
