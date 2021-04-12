import React from 'react';
import Homebutton from '../components/Homebutton';
import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom';

export default function HomePage() {
  // function onSetSidebarOpen(): boolean {
  //   return;
  // }

  return (
    <div>
      <Homebutton />
      <Sidebar />
      <Link to="/main">
        <p> MAIN - this is main page</p>
      </Link>
      <Link to="/mypage">
        <p> Mypage</p>
      </Link>
      <div>deploy Testing</div>
      <div className="App">:sunglasses: </div>
    </div>
  );
}
