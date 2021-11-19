import React, { Component } from "react";
import PropTypes from "prop-types";
class C09_PropsType_5 extends Component {
  render() {
    let message1 = "";
    if (this.props.boolValue === false) {
      message1 = "boolValue 기본값이 false 입니다.";
    }
    let message2 = "";
    if (this.props.boolValueWithoutDefault === false) {
      message2 = "boolValueWithoutDefault 기본값이 false 입니다.";
    }
    return (
      <div>
        {message1}
        {message2}
      </div>
    );
  }
}

C09_PropsType_5.propTypes = {
  boolValue: PropTypes.bool,
  boolValueWithoutDefault: PropTypes.bool,
};

// 기본값을 선언한다.
C09_PropsType_5.defaultProps = {
  boolValue: false,
};

export default C09_PropsType_5;

/**
 * App.js
 *
 */
