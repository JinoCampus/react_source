import React, { Component } from "react";
import PropTypes from "prop-types";
class C10_PropsType_6 extends Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}

C10_PropsType_6.propTypes = {
  children: PropTypes.node,
};
export default C10_PropsType_6;
