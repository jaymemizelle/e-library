import React from "react";
import { BrowserRouter as Link } from "react-router-dom";

function NavTabs() {
  // const location = useLocation();

  return (
    <div>
      <Link
        to="/"
        //   className={location.pathname === "/" ? "nav-link active" : "nav-link"}
      >
        Find Book
      </Link>
      <Link
        to="/library"
        // className={location.pathname === "/login" ? "nav-link active" : "nav-link"}
      >
        Library
      </Link>
    </div>
  );
}

export default NavTabs;
