import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { List } from "@mantine/core";
import { addNewTitle, addNewGroup } from "../../functions";

const TaskInput = () => {
  let list = useSelector((store) => store);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [group, setGroup] = useState("");

  const addNewTask = (e) => {
    e.preventDefault();
    if (title) {
      dispatch({
        type: "ADD_TASK",
        payload: title,
      });
    }
    setTitle("");
    if (group) {
      dispatch({
        type: "ADD_GROUP",
        payload: group,
      });
    }
    setGroup("");
  };

  return (
    <div className="TaskInput">
      <form action="">
        <input
          type="text"
          value={title}
          placeholder={"Enter the title"}
          onChange={(event) => addNewTitle(event, setTitle)}
        />
        <input
          type="text"
          value={group}
          placeholder={"Enter the group"}
          onChange={(event) => addNewGroup(event, setGroup)}
        />
        <button onClick={(event) => addNewTask(event)}>go!</button>
      </form>
      <List center listStyleType="none">
        {list.map((item) => (
          <List.Item key={item.id}>{item.title}</List.Item>
        ))}
      </List>
    </div>
  );
};

export { TaskInput };
