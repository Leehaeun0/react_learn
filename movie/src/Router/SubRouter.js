import React from "react";
import { Route, Switch } from "react-router-dom";
import Details from "../Page/Details";

const SubRouter = () => {
  return (
    <Switch>
      {/* <Route path="/Details/:v_id" component={Details} /> */}
      <Route excat path="/:content_id" component={Details} />
    </Switch>
  );
};

export default SubRouter;
