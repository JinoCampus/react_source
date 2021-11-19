import React, { Component } from "react";
import PropTypes from "prop-types";

class C04_PropsTypeComponent extends Component {
  render() {
    return <div className="message-container">{this.props.name}</div>;
  }
}

// 자료형을 선언
C04_PropsTypeComponent.propTypes = {
  name: PropTypes.string,
};

export default C04_PropsTypeComponent;
