import React, { Component } from "react";
import PropTypes from "prop-types";
class C07_PropsType_3 extends Component {
  render() {
    const { objValue } = this.props;

    return (
      <div>
        <span>Object : {String(Object.entries(objValue))}</span>
      </div>
    );
  }
}

C07_PropsType_3.propTypes = {
  objValue: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
  }),
};
export default C07_PropsType_3;

/**
 * App.js
 * <C07_PropsType_3
        objValue={{name:'JINO', age:30}}
      />
 */
