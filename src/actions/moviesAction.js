import axios from "axios";
import {URL_MOVIE, SET_MOVIES, IS_LOADING, LOADING_FAIL} from "../constants";

export const isLoading = () => ({type: IS_LOADING });
export const setMovies = (movies) => ({type: SET_MOVIES, payload: movies});
export const loadingFail = () => ({type: LOADING_FAIL});

export const getMovies = () => {
    return dispatch => {
        dispatch(isLoading());
        axios.get(URL_MOVIE)
            .then(({data}) => dispatch(setMovies(data.movie)))
            .catch((error) => {
                dispatch(loadingFail());
                console.error(error);
            })
    }
};