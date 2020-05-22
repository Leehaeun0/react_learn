import React from "react";
import { Route, Switch } from "react-router-dom";
import Popular from "../Page/Popular";
import Upcoming from "../Page/Upcoming";
import About from "../Page/About";
import Search from "../Page/Search";
import Details from "../Page/Details";
import HistoryTab from "../Page/HistoryTab";

const MainRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Popular} />
      <Route path="/Search" component={Search} />
      <Route path="/About" component={About} />
      <Route path="/Upcoming" component={Upcoming} />
      <Route path="/HistoryTab" component={HistoryTab} />
      <Route path="/:content_id" component={Details} />
      {/* <Route path="/Details" component={Details} /> */}
      {/* <Route path="/Upcoming/:content_id" component={Details} /> */}
      {/* <Route path="/About/:content_id" component={Details} /> */}
      <Route
        render={({ location }) => (
          <div>
            <h2 className="not">이 페이지는 존재하지 않습니다</h2>
            <p>{location.pathname}</p>
          </div>
        )}
      />
    </Switch>
  );
};

export default MainRouter;
