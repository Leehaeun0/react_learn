import "./App.css";
import React from "react";
import { NavLink } from "react-router-dom";
import MainRouter from "./Router/MainRouter";

const App = () => {
  return (
    <div className="container">
      <h1 className="header">MOVIE THEATER</h1>
      <ul className="nav_list">
        <li>
          <NavLink
            exact
            to="/"
            activeClassName="nav_active"
            className="nav_link"
          >
            POPULAR
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Upcoming"
            activeClassName="nav_active"
            className="nav_link"
          >
            UPCOMING
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/About"
            activeClassName="nav_active"
            className="nav_link"
          >
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Search"
            activeClassName="nav_active"
            className="nav_link"
          >
            SEARCH
          </NavLink>
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
