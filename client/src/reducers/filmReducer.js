import {
  GET_FILMS,
  ADD_FILM,
  DELETE_FILM,
  FILMS_LOADING
} from '../actions/types';

const initialState = {
  films: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_FILMS:
      return {
        ...state,
        films: action.payload,
        loading: false
      };
    case DELETE_FILM:
      return {
        ...state,
        films: state.films.filter(film => film._id !== action.payload)
      };
    case ADD_FILM:
      return {
        ...state,
        films: [action.payload, ...state.films]
      };
    case FILMS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
