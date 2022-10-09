import React, { useState } from "react";
import { Button, Grid, Input } from "@mantine/core";
import { IconFolderPlus } from "@tabler/icons";
import { addNewTitle, randomId } from "../../functions";
import { Group } from "../index";

const Board = () => {
  const [boardList, setBoardList] = useState([]);
  const [title, setTitle] = useState("");

  console.log(boardList);
  if (boardList.length > 0) {
    for (let i = 0; i < boardList.length; i++) {
      console.log(boardList[i].title);
    }
  }

  return (
    <div className="Board Container">
      <form>
        <Input
          onChange={(event) => {
            addNewTitle(event, setTitle);
          }}
        ></Input>
        <Button
          color="teal"
          radius="xl"
          size="md"
          compact
          variant="outline"
          leftIcon={<IconFolderPlus size={22} strokeWidth={1} color={"teal"} />}
          onClick={(event) => {
            event.preventDefault();
            setBoardList([...boardList, { id: randomId(), title: title }]);
          }}
        >
          Новая группа
        </Button>
        <Grid>
          {boardList.map((board) => (
            <Group key={board.id} title={board.title} />
          ))}
        </Grid>
      </form>
    </div>
  );
};

export { Board };
