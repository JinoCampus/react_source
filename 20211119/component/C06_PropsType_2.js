import React, { Component } from "react";

class C06_PropsType_2 extends Component {
  render() {
    // Boolean 타입을 조건문에 적용한 예제
    const message = this.props.bored ? "놀러가자" : "출근해야지";
    return <div className="message-container">{message}</div>;
  }
}

export default C06_PropsType_2;
