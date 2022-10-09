import React, { useState } from "react";
import { Input } from "@mantine/core";
import { addNewTitle } from "../../functions";
import { useDispatch, useSelector } from "react-redux";
import "./Group.scss";

const Group = (props) => {
  const id = props.id;
  console.log(id);
  const [title, setTitle] = useState("");

  const boards = useSelector((store) => store);
  const dispatch = useDispatch();
  console.log(boards);
  const addNewCard = (e) => {
    e.preventDefault();
    if (title) {
      dispatch({
        type: "ADD_CARD",
        title: title,
        id: id,
      });
    }
    setTitle("");
  };

  // for (var obj in boards) {
  //   if (obj.id === id) {
  //     // if (obj.cards.length > 0) {
  //     var cards = [...obj.cards];
  //     console.log(cards);
  //     return cards;
  //     // }
  //   }
  // }
  const cards = props.board.cards;
  return (
    <div className="Group">
      <h3>{props.title}</h3>
      <form action="">
        <Input
          type="text"
          value={title}
          placeholder="Enter card name"
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
          Новая карточка
        </Input>
      </form>

      <div
        style={{
          width: "100%",
          height: "100px",
          border: "1px solid red",
          borderRadius: "10px",
        }}
      >
        {cards.map((card) => (
          <p key={card.id}>{card.title}</p>
        ))}
      </div>
    </div>
  );
};

export { Group };
