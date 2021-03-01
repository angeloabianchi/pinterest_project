import React from 'react';
import "./BoardPin.css";
import {Link, useParams} from "react-router-dom";
import CreatePin from "../CreatePin/CreatePin";

const BoardPin = props => {
    const {data} = props;
    const params = useParams();

    const findPins = data.filter(pin => pin.boardId == params.boardId);

    return (
        <div className="board-template">
            <CreatePin />
            { findPins.map( pin => {
                return(
                    <div className="board-image">
                        <Link to={`/user/id=${params.userId}/board/id=${pin.boardId}/pin/id=${pin.id}`}>
                            <img src={pin.imgUrl} alt={pin.description} className="board-image" />
                        </Link>
                    </div>
                )
            })}
        </div>
    );
}

export default BoardPin;
