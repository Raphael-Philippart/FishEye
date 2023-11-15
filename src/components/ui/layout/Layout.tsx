import React from 'react';
import { Outlet } from 'react-router-dom';
import './Layout.scss';

const Layout = () => {
  return (
    <main className="Layout">
      <Outlet />
    </main>
  );
}

export default Layout;
