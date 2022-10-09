import React, { useState } from "react";
import { Button, Grid, Input } from "@mantine/core";
import { IconFolderPlus } from "@tabler/icons";
import { addNewTitle, randomId } from "../../functions";

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
        onClick={() =>
          setBoardList([...boardList, { id: randomId(), title: title }])
        }
      >
        Новая группа
      </Button>
      <Grid>
        {boardList.map((board) => (
          <Grid.Col
            style={{ minHeight: 80 }}
            span={2}
            key={board.id}
          ></Grid.Col>
        ))}
      </Grid>
    </div>
  );
};

export { Board };
