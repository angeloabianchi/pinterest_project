import React from 'react';
import "./PinPage.css";
import {Link, useParams} from 'react-router-dom';
import arrowLeft from './Icons/arrowLeft.svg';
import threeDots from './Icons/threeDots.svg';
import shareIcon from './Icons/shareIcon.svg';

const PinPage = props => {
    const { data } = props;
    let params = useParams();
    const pin = data.filter(pin => pin.id == params.pinId);

    return(
        <div className="Pin-Content">
            <div className="Pin-Board">
              <div className="Back-Arrow">
                <div className="Icons">
                  <Link to={`/user/id=${params.userId}/board/id=${params.boardId}`}><img src={arrowLeft} /></Link>
                </div>

                <div className="ParaTi"><h3>Para Ti</h3></div>
              </div>
              <div className="Pin-Square">
                <div><img className="Pin-Image" src={pin[0].imgUrl} alt={pin[0].description} /></div>

                <div className="Menu">
                  <div className="Menu-Icons">
                    <div className="Menu-Icons-1">
                      <a href="#"><img className="Icons-sec" src={threeDots} /></a>
                      <a href="#"><img className="Icons-sec" src={shareIcon} /></a>
                    </div>
                    <div className="Menu-Icons-2">
                      <button className="Button-Guardar">Guardar</button>
                    </div>
                  </div>
                  <div className="Menu-Description">
                    <h2>Subido por: {pin[0].userId}</h2>
                    <h2>Titulo: {pin[0].title}</h2>
                    <h2>Descripción: {pin[0].description}</h2>
                    <h2>Fecha: {pin[0].created_at}</h2>
                  </div>
                </div>
              </div>

            </div>
        </div>
    );
}


export default PinPage;
