// import React, { Component } from "react";
// import "../src/App.css";
// class Me extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//     console.log("constructor");
//   }

//   static getDerivedStateFromProps(nextProps, prevState) {
//     console.log("getDerivedStateFromProps");
//     console.log(nextProps);
//     console.log(prevState);
//     return null;
//   }
//   shouldComponentUpdate(nextProps, nextState) {
//     console.log("shouldComponentUpdate");
//     console.log(nextProps);
//     console.log(nextState);
//     return true;
//   }
//   componentDidMount() {
//     console.log("componentDidMount");
//   }
//   getSnapshotBeforeUpdate(prevProps, prevState) {
//     console.log("getSnapshotBeforeUpdate");
//     console.log(prevProps);
//     console.log(prevState);
//     return null;
//   }
//   componentDidUpdate(prevProps, prevState, snapshot) {
//     console.log("componentDidUpdate");
//     console.log(prevProps);
//     console.log(prevState);
//     console.log(snapshot);
//   }
//   componentWillUnmount() {
//     console.log("componentWillUnmount");
//   }
//   render() {
//     console.log("render");
//     return (
//       <div className={"App"}>
//         <h1>로또 번호</h1>

//         {this.props.lotto.map((lo, i) => {
//           return (
//             <h3 className={"lotto"} key={i}>
//               {i !== 6 ? lo + " 번" : "+ 보너스 번호 " + lo}
//             </h3>
//           );
//         })}
//         <br />
//         <br />
//         <button onClick={this.props.getLotto}>로또 번호 돌리기</button>
//       </div>
//     );
//   }
// }

// export default Me;

import React, { Component } from "react";
import "../src/App.css";
class Me extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lotto: [0, 0, 0, 0, 0, 0, 0],
    };
    console.log("constructor::: 컴포넌트 초기화");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(
      "getDerivedStateFromProps::: 이전 상태와 받은 props 비교 후 반영 할지 결정"
    );
    console.log(nextProps);
    console.log(prevState);
    if (nextProps.lotto !== prevState.lotto) {
      return { lotto: nextProps.lotto };
    }
    return null;
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      "shouldComponentUpdate::: 첫번째 로또 번호가 짝수일 때만 리렌더링 하게 할 수 있습니다."
    );
    console.log(nextProps);
    console.log(nextState);
    return nextProps.lotto[0] % 2 === 0;
  }

  componentDidMount() {
    console.log(
      "componentDidMount::: 컴포넌트가 렌더링 되고 난 다음 실행되는 함수"
    );
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    console.log(prevProps);
    console.log(prevState);
    return null;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate");
    console.log(prevProps);
    console.log(prevState);
    if (snapshot) {
      console.log("업데이트 되기 직전 스냅샷: ", snapshot);
    }
  }
  componentWillUnmount() {
    console.log(
      "componentWillUnmount::: 컴포넌트가 제거되기 직전에 호출되는 함수"
    );
  }

  render() {
    console.log("render");
    const lotto = this.props.lotto;
    const lottoState = this.state.lotto;
    return (
      <div className={"App"}>
        <h1>로또 번호</h1>

        <h3>GOD:</h3>
        {lotto.map((lo, i) => {
          return (
            <h3 className={"lotto"} key={i}>
              {i !== 6 ? lo + " 번" : "+ 보너스 번호 " + lo}
            </h3>
          );
        })}
        <br />
        <h3>Me: </h3>
        {lottoState.map((lo, i) => {
          return (
            <h3 className={"lotto"} key={i}>
              {i !== 6 ? lo + " 번" : "+ 보너스 번호 " + lo}
            </h3>
          );
        })}
        <br />
        <br />
        <br />
        <button onClick={this.props.getLotto}>로또 번호 돌리기</button>
      </div>
    );
  }
}

export default Me;
