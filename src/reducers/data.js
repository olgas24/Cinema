import React from "react";
import {SET_MOVIES, SET_ROOMS, SET_SESSIONS} from "../constants";

const initialValues = {
    movies: [],
    genres: [],
    sessions: [],
    rooms: []
};

export const data = (state = initialValues, action) => {
    switch (action.type) {
        case SET_MOVIES:
            const genres = action.payload.reduce((acc, item) => {
                if (item.genre && item.genre.length) {
                    item.genre.forEach((elem) => {
                        if (!acc.includes(elem.trim())){
                            acc.push(elem.trim());
                        }
                    });
                }
                return acc;
            }, []);
            return{
                ...state,
                movies: action.payload,
                genres
            };

        case SET_SESSIONS:
            const sortedArr = action.payload.sort((a, b) => {
                if (new Date(a.date) > new Date(b.date)){
                    return 1;
                }if (new Date(a.date) < new Date(b.date)){
                    return -1;
                }
                return 0;
            });
            console.log(sortedArr);

            const newArr = sortedArr.reduce((acc, item) => {
                if (!acc.length){
                    acc.push([]);
                }

                const lastElem = acc[acc.length-1];
                const lastElemDate =lastElem.length ? lastElem[0].date.split("T")[0] : null;
                const itemDate = item.date.split("T")[0];

                if (lastElem.length && +new Date(lastElemDate) !== +new Date(itemDate) ){
                    return [...acc, [item]];
                }
                acc[acc.length-1].push(item);
                return acc;
            }, []);

            return{
                ...state,
                sessions: newArr
            };

        case SET_ROOMS:
            return {
                ...state,
                rooms: action.payload
            };

        default:
            return state;
    }
};