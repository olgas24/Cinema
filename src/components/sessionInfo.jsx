import React from "react";
import {dateOptionsHours} from "../constants";

export const SessionInfo = ({room, date, rooms}) => (
        <div className="session-info">
            <div className={`color${room.name ? "green" : ""}`}>{room}</div>
            <div>{new Date(date).toLocaleTimeString("ru", dateOptionsHours)}</div>
        </div>
    );
