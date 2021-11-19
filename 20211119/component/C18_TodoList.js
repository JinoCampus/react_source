import React, { PureComponent } from "react";

class C18_TodoList extends PureComponent {
  render() {
    const C18_TodoList = [
      { taskName: "빨래하기", finished: false },
      { taskName: "공부하기", finished: true },
    ];

    return (
      <div>
        {C18_TodoList.map((todo) => (
          <div key={todo.taskName}>{todo.taskName}</div>
        ))}
      </div>
    );
  }
}

export default C18_TodoList;
