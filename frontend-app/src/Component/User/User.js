import React, {useEffect, useState} from 'react';
import './User.css';
import {Link, useParams} from 'react-router-dom';
import Api from '../../api';
import {Button} from "@material-ui/core";
import CreateBoard from "../CreateBoard/CreateBoard";
import NavBar from "../NavBar/NavBar";

const User = props => {
    const params = useParams();
    const [userData, setUserData] = useState(undefined);
    const {data} = props;

    const Logout = () => {
        window.location.href = "/";
    }

    useEffect(() => {
        if(params.userId) {
            Api.getUser(params.userId).then(res => setUserData(res));
        }
    }, [params.userId]);



    const findBoards = data.filter(board => board.userId == params.userId);

    return (
        <div className="users">
          <div><NavBar /></div>

          <div className="welcome">
              {userData && (          /* <--- se userData es true, enseñame un div con el userData.name */
                  <div>Bien venido al proyecto Pinterest, {userData.name}</div>
              )}
              {!userData && (         /* <--- se userData es false, enseñame un div con 'no data :(' */
                  <div>no data :(</div>
              )}
          </div>
            <Button variant='contained' color='default' size='large' onClick={Logout}>Logout</Button>

            <div className="boards">
              {findBoards.map( board => {
                  return(
                      <div className="board">
                         <Link to={`/user/id=${params.userId}/board/id=${board.id}`} className="linkToBoard">{board.title}</Link>
                      </div>
                  )
              })}
            </div>

            <div className="CreateBoardButton"><CreateBoard /></div>

        </div>



    );
}

export default User;
