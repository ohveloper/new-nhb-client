import React from 'react';
import { Link } from 'react-router-dom';

function NavMyPage() {
  return (
    <div>
      <Link to="/mypage">My Page</Link>
      <div>Welcome back!</div>
    </div>
  );
}

export default NavMyPage;
