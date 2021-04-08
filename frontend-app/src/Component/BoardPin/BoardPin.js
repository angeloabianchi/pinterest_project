import React, {useState} from 'react';
import "./BoardPin.css";
import {Link, useParams} from "react-router-dom";
import CreatePin from "../CreatePin/CreatePin";
import NavBar from "../NavBar/NavBar";

const BoardPin = props => {
    const {data} = props;
    const params = useParams();
    const [pinSize, setPinSize] = useState( ['small', 'medium', 'large']);
    var i = 0;

    const findPins = data.filter(pin => pin.boardId == params.boardId);

    const setSize = () => {
      if(i < 2) {
        i++;
      } else {
        i = 0;
      }
    }


    return (
      <div className="boardPin">
        <NavBar />
        <div className="board-template">
            { findPins.map( pin => {
              {setSize()}
                return(
                    <div className={`board-image-${pinSize[i]}`}>
                        <Link to={`/user/id=${params.userId}/board/id=${pin.boardId}/pin/id=${pin.id}`}>
                            <img src={pin.imgUrl} alt={pin.description} className="photo" />
                        </Link>
                    </div>
                )
            })}

        </div>
        <div className="CreateBoardButton"><CreatePin /></div>
        </div>
    );
}

export default BoardPin;
