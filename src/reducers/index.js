import React from "react";
import {combineReducers} from "redux";
import {loading} from "./loading";
import {data} from "./data";

export const rootReducer = combineReducers({
    loading: loading,
    data: data
});