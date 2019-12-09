export const BASE_URL = "http://subdomain.entony.fs.a-level.com.ua/api/";
export const URL_MOVIE = `${BASE_URL}movie/`;

export const SET_MOVIES = "SET_MOVIES";
export const IS_LOADING = "IS_LOADING";
export const LOADING_FAIL = "LOADING_FAIL";

export const URL_SESSIONS = `${URL_MOVIE}session/`;
export const SET_SESSIONS = "SET_SESSIONS";

export const dateOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
};

export const URL_ROOMS = `${URL_MOVIE}room/`;
export const SET_ROOMS = "SET_ROOMS";

export const dateOptionsHours = {
    hour: 'numeric',
    minute: 'numeric'
};

export const URL_SPACE_SHADOW = `${URL_MOVIE}space-shadow/`;