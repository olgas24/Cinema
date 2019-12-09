import axios from "axios";
import {URL_SESSIONS, SET_SESSIONS, IS_LOADING, LOADING_FAIL, URL_ROOMS, SET_ROOMS} from "../constants";
// import {sessions} from "../reducers/sessions";

export const isLoading = () => ({type: IS_LOADING });
export const loadingFail = () => ({type: LOADING_FAIL});
export const setSessions = (sessions) => ({type: SET_SESSIONS, payload: sessions});
export const setRooms = (rooms) => ({type: SET_ROOMS, payload: rooms});

export const getSessions = () => {
    return dispatch => {
        dispatch(isLoading());

        Promise.all([axios.get(URL_SESSIONS), axios.get(URL_ROOMS)])
            .then(([sessions, rooms]) => {
                dispatch(setSessions(sessions.data.session));
                dispatch(setRooms(rooms.data.rooms));
            })
            .catch((error) => {
                dispatch(loadingFail());
                console.error(error);
            })
    }
};