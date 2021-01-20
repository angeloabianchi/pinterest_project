import React from 'react';
import { useParams } from 'react-router-dom';
import "./PinPage.css";
import {Link} from 'react-router-dom';
import arrowLeft from './Icons/arrowLeft.svg';
import threeDots from './Icons/threeDots.svg';
import shareIcon from './Icons/shareIcon.svg';

const PinPage = props => {
    const { data } = props

    let { params } = useParams();


    let photo = data.filter(pin => pin.id=== params)


    return(
        <div className="Pin-Content">
            <div className="Pin-Board">
              <div className="Icons">
                <Link to="/"><img src={arrowLeft} /></Link>
              </div>

              <div className="ParaTi"><h3>Para Ti</h3></div>

              <div><img className="Pin-Image" src={photo[0].imgUrl} /></div>

              <div className="Menu">
                <div className="Menu-Icons">
                  <div className="Menu-Icons-1">
                    <a href="#"><img className="Icons-sec" src={threeDots} /></a>
                    <a href="#"><img className="Icons-sec" src={shareIcon} /></a>
                  </div>
                  <div className="Menu-Icons-2">
                    <button className="button-guardar">Guardar</button>
                  </div>
                </div>
                <div className="Menu-Description">
                  <h2>Subido por: {photo[0].author}</h2>
                  <h2>Titulo: {photo[0].title}</h2>
                </div>
              </div>

            </div>
        </div>
    );
}


export default PinPage;
