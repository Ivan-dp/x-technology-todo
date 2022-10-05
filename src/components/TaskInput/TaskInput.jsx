import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { List } from "@mantine/core";

const TaskInput = () => {
  let list = useSelector((store) => store);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  const addNewTitle = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const addNewTask = (e) => {
    e.preventDefault();
    if (title) {
      dispatch({
        type: "ADD_TASK",
        payload: title,
      });
    }
    setTitle("");
  };

  return (
    <div className="TaskInput">
      <form action="">
        <input
          type="text"
          value={title}
          placeholder={"Enter the title"}
          onChange={(event) => addNewTitle(event)}
        />
        <button onClick={(event) => addNewTask(event)}>go!</button>
      </form>
      <List center listStyleType="none">
        {list.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </List>
    </div>
  );
};

export { TaskInput };
