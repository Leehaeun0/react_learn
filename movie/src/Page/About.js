import React from "react";
import { useLocation, useRouteMatch } from "react-router-dom";

const About = ({ history }) => {
  const location = useLocation();
  const match = useRouteMatch();
  console.log("location:", location);
  console.log("match:", match);
  return (
    <>
      <div className="about_wrap">
        <span>Developer - Haeun</span>
        <span>Made By React</span>
        <span>THANK YOU!</span>
      </div>
      <button className="gohome_btn" onClick={() => history.push("/")}>
        HOME
      </button>
      {/* <button onClick={() => history.goBack()}>뒤로가기</button> */}
    </>
  );
};

export default About;
