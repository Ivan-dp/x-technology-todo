import { Grid, Input } from "@mantine/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewTitle } from "../../functions";
import { Group } from "../index";

const Board = () => {
  let boards = useSelector((store) => store);
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");

  console.log(boards);
  if (boards.length > 0) {
    for (let i = 0; i < boards.length; i++) {
      console.log(boards[i].title);
    }
  }

  const addNewGroup = (e) => {
    e.preventDefault();
    if (title) {
      dispatch({
        type: "ADD_GROUP",
        title: title,
      });
    }
    setTitle("");
  };

  return (
    <div className="Board Container">
      <Grid>
        {boards.map((board) => (
          <Group
            id={board.id}
            key={board.id}
            title={board.title}
            board={board}
          />
        ))}
      </Grid>
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
            addNewGroup(event);
          }}
        >
          Новая группа
        </Input>
      </form>
    </div>
  );
};

export { Board };
