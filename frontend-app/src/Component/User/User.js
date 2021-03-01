import React, {useEffect, useState} from 'react';
import './User.css';
import {Link, useParams} from 'react-router-dom';
import Api from '../../api';
import {Button} from "@material-ui/core";
import CreateBoard from "../CreateBoard/CreateBoard";

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
            <CreateBoard />
            <div>
                {userData && (          /* <--- se userData es true, enseñame un div con el userData.name */
                    <div>Bien venido al proyecto Pinterest, {userData.name}</div>
                )}
                {!userData && (         /* <--- se userData es false, enseñame un div con 'no data :(' */
                    <div>no data :(</div>
                )}
            </div>
            <Button variant='contained' color='default' size='large' onClick={Logout}>Logout</Button>

            {findBoards.map( board => {
                return(
                    <div className="boards">
                       <Link to={`/user/id=${params.userId}/board/id=${board.id}`}>{board.title}</Link>
                    </div>
                )
            })}

        </div>


    );
}

export default User;