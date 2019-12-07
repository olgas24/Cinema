import React from "react";
import thunk from "redux-thunk";
import {createStore, applyMiddleware} from "redux";
import {createBrowserHistory} from "history";

import {rootReducer} from "../reducers";

export const store = createStore(rootReducer, applyMiddleware(thunk));
export const history = createBrowserHistory();