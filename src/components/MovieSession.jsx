import React, {useState} from "react";
import {BuyTicket} from "./Modal";
import {dateOptionsHours} from "../constants";

export const MovieSession = ({session}) => {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    return (
        <React.Fragment>
            <div className="movie-session">
                <div className="movie-info">
                    <div>
                        <img src={session.movie.poster} alt={session.movie.title}/>
                    </div>
                    <div>
                        <h4>{session.movie.title}</h4>
                        <div className="session-info">
                            <div>{session.room}</div>
                            <div>{new Date(session.date).toLocaleTimeString("ru", dateOptionsHours)}</div>
                        </div>
                    </div>
                </div>
                <div>
                    <button onClick={handleClick}>Купить билет</button>
                </div>
            </div>
            {showModal && <BuyTicket sessionId={session._id}/>}
        </React.Fragment>
    )
};