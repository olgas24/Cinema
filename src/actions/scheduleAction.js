import axios from "axios";
import {URL_SESSIONS, SET_SESSIONS, LOADING_FAIL, URL_ROOMS, SET_ROOMS} from "../constants";

export const loadingFail = () => ({type: LOADING_FAIL});
export const setSessions = (sessions) => ({type: SET_SESSIONS, payload: sessions});
export const setRooms = (rooms) => ({type: SET_ROOMS, payload: rooms});

export const getSessions = () => {
    return dispatch => {
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