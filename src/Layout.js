// Layout.js
import React from "react";
import Sidebar from "./components/common/Sidebar";
import Navbar from "./components/common/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="flex gap-8">
      <Sidebar />
      <div className="mt-4 flex-1 mr-4">
        <Navbar />
        <div className="m-4">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
