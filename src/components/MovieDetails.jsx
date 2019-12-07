import React from "react";

export const MovieDetails = ({title, text}) => (
    <div>
        <span style={{fontWeight: "bold", color: '#337ab7'}}>{title}</span>
        {
            <span>
                {text}
            </span>
        }
    </div>
);