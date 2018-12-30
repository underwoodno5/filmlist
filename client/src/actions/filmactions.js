import axios from 'axios';
import { GET_FILMS, ADD_FILM, DELETE_FILM, FILMS_LOADING } from './types';

export const getFilms = () => dispatch => {
  dispatch(setFilmsLoading());
  axios.get('/api/films').then(res =>
    dispatch({
      type: GET_FILMS,
      payload: res.data
    })
  );
};

export const deleteFilm = id => dispatch => {
  axios.delete(`/api/films/${id}`).then(res =>
    dispatch({
      type: DELETE_FILM,
      payload: id
    })
  );
};

export const addFilm = film => dispatch => {
  axios.post('/api/films', film).then(res =>
    dispatch({
      type: ADD_FILM,
      payload: res.data
    })
  );
};

export const setFilmsLoading = () => {
  return {
    type: FILMS_LOADING
  };
};
