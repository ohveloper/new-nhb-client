import React from 'react';
import moon from '../../img/moon.png';
import { Link } from 'react-router-dom';
import './NavSidebar.scss';

export default function Homebutton() {
  return (
    <div id="Homebutton">
      <Link to="/">
        <img id="logo" src={moon} alt="Home" />
        <span>N행시의 밤</span>
      </Link>
    </div>
  );
}
