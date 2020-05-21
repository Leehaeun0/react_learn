import "./App.css";
import React from "react";
import { NavLink, Link } from "react-router-dom";
import MainRouter from "./Router/MainRouter";

const App = () => {
  return (
    <div className="container">
      <Link to="/">
        <h1 className="header">MOVIE THEATER</h1>
      </Link>

      <ul className="nav_list">
        <li>
          <h2>
            <NavLink
              exact
              to="/"
              activeClassName="nav_active"
              className="nav_link"
            >
              POPULAR
            </NavLink>
          </h2>
        </li>
        <li>
          <h2>
            <NavLink
              to="/Upcoming"
              activeClassName="nav_active"
              className="nav_link"
            >
              UPCOMING
            </NavLink>
          </h2>
        </li>
        <li>
          <h2>
            <NavLink
              to="/About"
              activeClassName="nav_active"
              className="nav_link"
            >
              ABOUT
            </NavLink>
          </h2>
        </li>
        <li>
          <h2>
            <NavLink
              to="/Search"
              activeClassName="nav_active"
              className="nav_link"
            >
              SEARCH
            </NavLink>
          </h2>
        </li>
        {/* <li>
          <NavLink
            to="/HistoryTab"
            activeClassName="nav_active"
            className="nav_link"
          >
            History
          </NavLink>
        </li> */}
      </ul>
      <MainRouter />
    </div>
  );
};

export default App;
