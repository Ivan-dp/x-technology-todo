import { Input } from "@mantine/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTitle, randomId } from "../../functions";
import { Card } from "../";
import "./Group.scss";

const Group = (props) => {
  const id = props.group.id;
  const [title, setTitle] = useState("");
  const cards = props.group.cards;
  const cardId = "card-" + randomId();
  const dispatch = useDispatch();
  const addNewCard = (e) => {
    e.preventDefault();
    if (title) {
      dispatch({
        type: "ADD_CARD",
        title: title,
        id: id,
        cardId: cardId,
      });
    }
    setTitle("");
  };
  return (
    <div className="Group">
      <h3>{props.group.title}</h3>
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
          height: "auto",
          border: "1px solid red",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        {cards.map((card) => (
          <Card key={card.id} card={card} groupId={id} cardId={cardId} />
        ))}
      </div>
    </div>
  );
};

export { Group };
