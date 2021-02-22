import React from "react";
import './HomePage.css';
import Register from "../Register/Register";
import pinterest from './Icons/pinterest.svg';
import Login from "../Login/Login";


const HomePage = props => {
    const {data} = props;
    return (
        <div>
            <Register />
            <Login data={data} {...props} />
            <div>

            </div>
        </div>
    );

}

export default HomePage;