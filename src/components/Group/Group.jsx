import React, { useState } from "react";
import { Input } from "@mantine/core";
import { addNewTitle } from "../../functions";
import { useDispatch, useSelector } from "react-redux";
import "./Group.scss";

const Group = (props) => {
  const [title, setTitle] = useState("");

  let boards = useSelector((store) => store);
  const dispatch = useDispatch();

  const addNewCard = (e) => {
    e.preventDefault();
    if (title) {
      dispatch({
        type: "ADD_CARD",
        payload: {
          title: title,
        },
      });
    }
    setTitle("");
  };
  return (
    <div className="Group">
      <h3>{props.title}</h3>
      <form action="">
        <Input
          type="text"
          value={title}
          placeholder="Enter group name"
          onChange={(event) => {
            addNewTitle(event, setTitle);
          }}
        ></Input>
        <Input
          component="button"
          onClick={(event) => {
            addNewCard(event);
          }}
        >
          Новая группа
        </Input>
      </form>
    </div>
  );
};

export { Group };
