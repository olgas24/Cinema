import React from "react";

export const Places = ({space, handleChoosePlace}) => {
    return (
        <div className="places">
            {
                space.map((item, i) => {
                    return (
                        <div key={i} className="row">
                            <div className="row-legend">Ряд {i + 1}</div>
                            {
                                item.map((elem, n) => {
                                    return(
                                        <div key={`${i}-${n}`}
                                             className={`place${elem.booked ? " booked" : ""}`}
                                             onClick={() => handleChoosePlace(elem)}>
                                            <span>{elem.place}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    )
};