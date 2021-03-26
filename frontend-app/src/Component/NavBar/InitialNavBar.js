import React from "react";
import "./NavBar.css";
import Login from "../Login/Login";
import Register from "../Register/Register";
import "./InitialNavBar.css";
import pinterestIcon from './pinterestIcons/pinterestIcon.png';
import {Link} from 'react-router-dom';

const InitialNavBar = props => {
    const {data} = props;
    return (
        <div className="content">
            <div className="initialNavBar">
                <div className="initialNavBarIcon"><Link to={"/"}><img src={pinterestIcon} className="PinterestIcon" /></Link></div>
                <div><Login data={data} {...props} /></div>
                <div><Register /></div>
            </div>


        </div>
    )
}

export default InitialNavBar;