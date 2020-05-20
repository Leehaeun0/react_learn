import React from "react";
import { Route, Switch } from "react-router-dom";
import Details from "../Page/Details";

const SubRouter = () => {
  return (
    <Switch>
      {/* <Route
        exact
        path="/Details"
        render={() => {
          return <p>스킬을 선택해주세요</p>;
        }}
      /> */}
      <Route path="/Details/:v_id" component={Details} />
    </Switch>
  );
};

export default SubRouter;
