import React, { Component } from "react";
import PropTypes from "prop-types";

function C16FuncComponent(props, context) {
  // 클래스형 컴포넌트의 this.props 와 동일
  const { somPropValue } = props;
  // 클래스형 컴포넌트의 this.context 와 동일
  const { someConte5xtValue } = context;

  return (
    <div>
      <h1>Hello, {somPropValue}</h1>
    </div>
  );
}

C16FuncComponent.propTypes = { somPropValue: PropTypes.any };
C16FuncComponent.defaultProps = { somPropValue: "default Value" };

export default C16FuncComponent;
