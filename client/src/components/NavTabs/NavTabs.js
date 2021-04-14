import React from "react";
import { Link } from "react-router-dom";

function NavTabs() {

  return (
    <div>
      <Link to="/">
        Find Book
      </Link>
      <Link to="/library">
        Library
      </Link>
    </div>
  );
}

export default NavTabs;
