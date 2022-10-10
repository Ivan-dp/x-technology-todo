import React, { useState } from "react";
import { Input } from "@mantine/core";
import { addNewTitle } from "../../functions";
import { useDispatch } from "react-redux";

const Card = (props) => {
  const card = props.card;
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();
  const addNewTask = (e) => {
    e.preventDefault();
    if (title) {
      dispatch({
        type: "ADD_TASK",
        title: title,
        id: props.groupId,
        cardId: props.cardId,
      });
    }
    setTitle("");
  };
  return (
    <div
      className="Card"
      style={{
        width: "100%",
        minHeight: "30px",
        border: "1px solid green",
        borderRadius: "10px",
      }}
    >
      <h3>{card.title}</h3>
      <p>{card.description}</p>
      <form action="">
        <Input
          type="text"
          value={title}
          placeholder="Enter task name"
          onChange={(event) => {
            addNewTitle(event, setTitle);
          }}
        ></Input>
        <Input
          component="button"
          onClick={(event) => {
            addNewTask(event);
          }}
        >
          Новая карточка
        </Input>
        {card.tasks.map((task) => (
          <p key={task.id}>{task.title}</p>
        ))}
      </form>
    </div>
  );
};

export { Card };
