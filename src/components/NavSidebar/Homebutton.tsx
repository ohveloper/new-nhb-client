import React from 'react';
import moon from '../../img/moon.png';
import { Link } from 'react-router-dom';
import '../../styles/HomepageSidebar/NavSidebar.scss';

export default function Homebutton() {
  return (
    <div id="Homebutton">
      <Link to="/">
        <div id="HomebuttonTxt">
          <img id="logo" src={moon} alt="Home" />
          N행시의 밤
        </div>
      </Link>
    </div>
  );
}
