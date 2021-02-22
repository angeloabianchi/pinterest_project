import React from 'react';
import "./BoardPin.css";
import {Link} from "react-router-dom";



const BoardPin = props => {

    const {data} = props;

    return (
        <div className="board-template">
            { data.map( pin => {
                return(
                    <div className="board-image">
                        <Link to={`/pin/id=${pin.id}`}>
                            <img src={pin.imgUrl} alt={pin.description} className="board-image" />
                        </Link>
                    </div>
                )
            })}
        </div>
    );
}

export default BoardPin;
