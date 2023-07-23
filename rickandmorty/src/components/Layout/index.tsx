import React from "react";
import Header from "../Header";
import { Outlet } from "react-router-dom";

import './layout.style.css'

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <div className="children">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
