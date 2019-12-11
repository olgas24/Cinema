import React, {useState} from "react";
import {BuyTicket} from "./ModalBuyTicket";
import {SessionInfo} from "./SessionInfo";

export const MovieSession = ({session, rooms}) => {
    const [showModal, setShowModal] = useState(false);

    const toggleShowModal = () => {
        setShowModal(!showModal);
    };

    return (
        <React.Fragment>
            <div className="movie-session">
                <div className="movie-info">
                    <div>
                        <img src={session.movie.poster} alt={session.movie.title}/>
                    </div>
                    <div>
                        <h2>{session.movie.title}</h2>
                        <SessionInfo room={session.room} date={session.date} rooms={rooms}/>
                    </div>
                </div>
                <div>
                    <button onClick={toggleShowModal}>Купить билет</button>
                </div>
            </div>
            {showModal && <BuyTicket session={session} handleCloseModal={toggleShowModal}/>}
        </React.Fragment>
    )
};