import React from "react";
import { TaskInput, Board } from "../../components";

const TodoPage = () => {
  return (
    <div className="TodoPage">
      Todo Page
      <TaskInput />
      <Board />
    </div>
  );
};

export { TodoPage };
