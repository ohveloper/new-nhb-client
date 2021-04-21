import React from 'react';
import Sidebar from './Sidebar';
import Homebutton from './Homebutton';
import './NavSidebar.scss';

export default function NavSidebarContainer() {
  return (
    <div id="NavSidebarContainer">
      <div>
        <Homebutton />
      </div>
      <div>
        <Sidebar />
      </div>
    </div>
  );
}
