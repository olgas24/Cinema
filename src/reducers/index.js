import React from "react";
import {combineReducers} from "redux";
import {loading} from "./loading";
import {movies} from "./movies";

export const rootReducer = combineReducers({
    loading: loading,
    data: movies
});