import React from "react";
import { Route, Switch } from "react-router-dom";
import EachSkill from "../Page/EachSkill";

const SubRouter = () => {
  return (
    <Switch>
      <Route
        exact
        path="/Skill"
        render={() => {
          return <p>스킬을 선택해주세요</p>;
        }}
      />
      <Route path="/Skill/:content_id" component={EachSkill} />
    </Switch>
  );
};

export default SubRouter;
