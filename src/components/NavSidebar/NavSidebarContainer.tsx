import React from 'react';
import Sidebar from './Sidebar';
import Homebutton from './Homebutton';

export default function NavSidebarContainer() {
  return (
    <div>
      <Homebutton />
      <Sidebar />
    </div>
  );
}
