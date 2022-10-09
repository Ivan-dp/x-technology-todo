import React from "react";
import "./Group.scss";

const Group = (props) => {
  return (
    <div className="Group">
      <h3>{props.title}</h3>
    </div>
  );
};

export { Group };
