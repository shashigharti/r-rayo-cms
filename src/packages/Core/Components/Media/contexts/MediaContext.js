import React, { createContext, useReducer, useEffect } from 'react';
import { MediaReducer } from '../reducer/MediaReducer';

export const MediaContext = createContext();
const initialState = {
  users: [],
};
const MediaContextProvider = props => {
  const [medias, dispatch] = useReducer(MediaReducer, initialState, () => {
    const localData = localStorage.getItem('medias');
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem('medias', JSON.stringify(medias));
  }, [medias]);
  return (
    <MediaContext.Provider value={{ medias, dispatch }}>{props.children}</MediaContext.Provider>
  );
};

export default MediaContextProvider;
