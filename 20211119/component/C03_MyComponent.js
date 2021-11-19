import React from "react";

class MyComponent extends React.Component {
  render() {
    const name = this.props.name;

    return <span>{name}</span>;
  }
}

export default MyComponent;

/**
 * App.js
 * <PropsComponent
        name="이건 스트링 치즈"
      />
 */
