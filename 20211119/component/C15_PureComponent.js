import React, { useState } from "react";

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidUpdate() {
    const { value } = this.props;
    console.log("Componet 새로고침", value);
  }
  render() {
    return (
      <>
        <label>React Component</label>
      </>
    );
  }
}

class MyPureComponent extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  componentDidUpdate() {
    const { value } = this.props;
    console.log("PureComponent 새로고침", value);
  }
  render() {
    return (
      <>
        <label>Pure Component</label>
      </>
    );
  }
}

function C15_PureComponent() {
  const [listValue, setListValue] = useState("JJANG");
  const [version, setVersion] = useState({ version: 0 });

  const handleClick = () => {
    setTimeout(() => {
      console.log("1. 시작 ");
      setListValue("JJANG");
      setVersion({ version: 1 });
      console.log("1. 끝 ");
    }, 1000);

    setTimeout(() => {
      console.log("2. 시작 ");
      setListValue("LEE");
      setVersion({ version: 2 });
      console.log("2. 끝 ");
    }, 2000);

    setTimeout(() => {
      console.log("3. 시작 ");
      setVersion({ version: 3 });
      console.log("3. 끝 ");
    }, 3000);
  };
  return (
    <div className="body">
      <div>
        <button onClick={handleClick}>클릭</button>
      </div>
      <div>
        <MyComponent value={listValue} />
      </div>
      <div>
        <MyPureComponent value={listValue} />
      </div>
    </div>
  );
}

export default C15_PureComponent;
