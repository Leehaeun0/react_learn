import React, { Component } from "react";
import withSplitting from "./withSplitting";

const SplitMe = withSplitting(() => import("./SplitMe"));

class App extends Component {
  state = {
    visible: false,
  };
  handleClick = () => {
    this.setState({
      visible: true,
    });
  };
  render() {
    const { visible } = this.state;
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        {visible && <SplitMe />}
      </div>
    );
  }
}

export default App;
