import React from "react";
import { Route, Link, NavLink } from "react-router-dom";
import MainRouter from "./Router/MainRouter";

const App = () => {
  const activeStyle = {
    background: "orange",
    color: "green",
  };
  return (
    <div>
      <h1>블로그에 오신걸 환영합니다.</h1>
      <ul>
        <li>
          <NavLink exact to="/" activeStyle={activeStyle}>
            메인
          </NavLink>
        </li>
        <li>
          <NavLink to="/About" activeStyle={activeStyle}>
            자기소개
          </NavLink>
        </li>
        <li>
          <NavLink to="/Skill" activeStyle={activeStyle}>
            보유스킬
          </NavLink>
        </li>
        <li>
          <NavLink to="/History" activeStyle={activeStyle}>
            히스토리 보기
          </NavLink>
        </li>
      </ul>
      <hr />
      <MainRouter />
    </div>
  );
};

export default App;
