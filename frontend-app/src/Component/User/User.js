import React, {useEffect, useState} from 'react';
import './User.css';
import {useParams} from 'react-router-dom';
import Api from '../../api';

const User = props => {
    const params = useParams();
    const [userData, setUserData] = useState(undefined);

    useEffect(() => {
        if(params.userId) {
            Api.getUser(params.userId).then(res => setUserData(res));
        }
    }, [params.userId])

    return (
        <div className="users">
            {userData && (          /* <--- se userData es true, enseñame un div con el userData.name */
                <div>Bien venido al projecto Pinterest, {userData.name}</div>
            )}
            {!userData && (         /* <--- se userData es false, enseñame un div con 'no data :(' */
                <div>no data :(</div>
            )}
        </div>
    )
}

export default User;