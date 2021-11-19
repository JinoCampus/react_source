import React, { Component } from "react";
import PropTypes from "prop-types";

class C05_PropsType_1 extends Component {
  render() {
    const { boolValue, numValue, arrayValue, objValue, nodeValue, funcValue } =
      this.props;

    return (
      <div>
        <span>Boolean : {boolValue.toString()}</span>
        <br />
        <span>Number : {numValue}</span>
        <br />
        <span>Array : {arrayValue}</span>
        <br />
        <span>
          Object : {objValue.name}
          {objValue.age}
        </span>
        <br />
        <span>Node : {nodeValue}</span>
        <br />
        <span>Function : {funcValue}</span>
      </div>
    );
  }
}

C05_PropsType_1.propTypes = {
  boolValue: PropTypes.bool,
  numValue: PropTypes.number,
  arrayValue: PropTypes.arrayOf(PropTypes.number),
  objValue: PropTypes.object,
  nodeValue: PropTypes.node,
  funcValue: PropTypes.func,
};

export default C05_PropsType_1;

/**
 * App.js
 * <C05_PropsType_1
        boolValue={true}
        numValue={112}
        arrayValue={[1,2,3]}
        objValue={{name: '강강강', age: 30}}
        nodeValue={<h1>헤더</h1>}
        funcValue={console.log('하하하')}
      />
 */
