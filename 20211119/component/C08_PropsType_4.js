import React, { Component } from "react";
import PropTypes from "prop-types";
class C08_PropsType_4 extends Component {
  render() {
    const { objValue, requiredStringValue } = this.props;

    return (
      <div>
        <span>Object : {String(Object.entries(objValue))}</span>
        <span>필수값: {requiredStringValue}</span>
      </div>
    );
  }
}

C08_PropsType_4.propTypes = {
  objValue: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
  }),
  // 필수 프로퍼티
  requiredStringValue: PropTypes.string.isRequired,
};

export default C08_PropsType_4;

/**
 * App.js
 * <C08_PropsType_4
        objValue={{name:'아이유'}}
        requiredStringValue={'필수'}
      />
 */
