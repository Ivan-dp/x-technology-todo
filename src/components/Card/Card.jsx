import React from "react";

const Card = (props) => {
  const card = props.card;
  return (
    <div
      className="Card"
      style={{
        width: "100%",
        minHeight: "30px",
        border: "1px solid green",
        borderRadius: "10px",
        // margin: "10px",
      }}
    >
      <h3>{card.title}</h3>
      <p>{card.description}</p>
    </div>
  );
};

export { Card };
