/* eslint-disable react/state-in-constructor */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
import React, { Component } from 'react';

class ButtonChild01 extends Component {
  state = {
    title: this.props.color,
    color: this.props.color
  };

  handleButtonClick = () => {
    console.log('Button Child01 클릭!');
    const check = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    if (check.test(this.state.title)) {
      console.log('한글');
      this.setState({
        title: 'Purple Button'
      });
    } else {
      console.log('영어');
      this.setState({
        title: '보라색 버튼'
      });
    }
  };

  render() {
    const { title, color } = this.state;
    const ButtonStyle = {
      border: 'none',
      width: 100,
      height: 30,
      background: color
    };
    return (
      <button style={ButtonStyle} onClick={this.handleButtonClick}>
        {title}
      </button>
    );
  }
}

ButtonChild01.defaultProps = {
  title: '이름없음 버튼'
};

export default ButtonChild01;
