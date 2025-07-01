import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className=" bg-amber-400 min-h-screen w-80 px-14">
      <Link to="/dashboard">
        <nav>Dashboard</nav>
      </Link>
      <Link to="/userprofile">
        <nav>Userprofile</nav>
      </Link>
      <Link to="/settings">
        <nav>Setting</nav>
      </Link>
    </div>
  );
};

export default Sidebar;
