import React from 'react';
import './Layout.scss';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <main className="Layout">
      <header className="Layout-header">
        Layout Header
      </header>
      <Outlet />
    </main>
  );
}

export default Layout;
