import React from 'react';
import "./NavBar.css";
import pinterestIcon from './pinterestIcons/pinterestIcon.png';
import bellIcon from './pinterestIcons/bellIcon.svg';
import chatIcon from './pinterestIcons/chatIcon.svg';
import userIcon from './pinterestIcons/userIcon.svg';
import {Link} from 'react-router-dom';

const NavBar = () => {


    return (
      <div className="NavBar">
        <div className="NavBarIcons"><Link to='/pins'><img src={pinterestIcon} className="PinterestIcon" /></Link></div>
        <div className="NavBarIcons-Buttons-Inicio"><Link className="Link" to='/pins'>Inicio</Link></div>
        <div className="NavBarIcons"><button className="Buttons-Siguiendo" href="#siguiendo" >Siguiendo</button></div>
        <div className="NavBarIcons"><input type="text" placeholder="Buscar" className="SearchBar" /></div>
        <div className="NavBarIcons"><a href="#"><img className="Icon" src={bellIcon}/></a></div>
        <div className="NavBarIcons"><a href="#"><img className="Icon" src={chatIcon}/></a></div>
        <div className="NavBarIcons"><a href="#"><img className="Icon" src={userIcon}/></a></div>
        <ul className="menu">
          <li className="dropdown"><span>▾</span>
            <ul className="features-menu">
              <li><a href="#">Añadir otra cuenta</a></li>
              <li><a href="#">Añadir otra cuenta business</a></li>
              <li><a href="#">Ayuda</a></li>
              <li><a href="#">Configuraciones</a></li>
            </ul>
          </li>
        </ul>
      </div>
    )
}

export default NavBar;
