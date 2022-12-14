import { MantineProvider } from "@mantine/core";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import App from "./App";
import { randomId } from "./functions";
import "./index.scss";

function Main() {
  const reducer = (state = [], action) => {
    console.log(state);
    switch (action.type) {
      case "ADD_GROUP":
        return [
          ...state,
          {
            id: "group-" + randomId(),
            type: "group",
            title: action.title,
            description: "group description",
            tags: [],
            color: "",
            cards: [],
          },
        ];
      case "ADD_CARD":
        return state.map((group) => {
          if (group.id === action.id)
            return {
              ...group,
              cards: [
                ...group.cards,
                {
                  id: action.cardId,
                  type: "card",
                  title: action.title,
                  description: "card description",
                  tags: [],
                  color: "",
                  tasks: [],
                },
              ],
            };
          console.log(group.cards.Object);
          console.log(state[0].cards[0].title);
          return group;
        });
      case "ADD_TASK":
        return state.map((group) => {
          if (group.id === action.id) {
            return [...group.cards].map((card) => [
              ...card.tasks.push({
                id: "task-" + randomId(),
                type: "task",
                title: action.title,
                description: "task description",
                completed: false,
              }),
            ]);
          }
        });
      // case "ADD_TASK":
      //   return state.map((group) => {
      //     if (group.id === action.id)
      //       return {
      //         ...group,
      //         cards: [
      //           ...group.cards,
      //           {
      //             id: action.cardId,
      //             tasks: [
      //               ...group.cards.tasks,
      //               {
      //                 id: "task-" + randomId(),
      //                 type: "task",
      //                 title: action.title,
      //                 description: "task description",
      //                 completed: false,
      //               },
      //             ],
      //           },
      //         ],
      //       };
      //     console.log(group);
      //     console.log(state[0].cards[0].title);
      //     return group;
      //   });
      // case "ADD_TASK":
      //   return (
      //     for(let i = 0; i < state.length; i++){

      //     }
      //   )
      ///////////////////////////////////////////////////////////////
      // case "ADD_TASK":
      //   return [
      //     ...state,
      //     {
      //       ...state.Object,
      //       cards: [
      //         ...state.Object.cards,
      //         {
      //           ...state.Object.cards.Object,
      //           tasks: [
      //             ...state.Object.cards.Object.tasks,
      //             {
      //               id: "task-" + randomId(),
      //               type: "task",
      //               title: action.title,
      //               description: "task description",
      //               completed: false,
      //             },
      //           ],
      //         },
      //       ],
      //     },
      //   ];
      //   ///////////////////////////////////////////////////////////////
      // case "ADD_TASK":
      //   return [
      //     ...state.map((group) => {
      //       if (group.id === action.id)
      //         return [
      //           ...group.cards.map((card) => {
      //             if (card.id === action.cardId) {
      //               return {
      //                 card: [
      //                   ...card.tasks,
      //                   {
      //                     id: "task-" + randomId(),
      //                     type: "task",
      //                     title: action.title,
      //                     description: "task description",
      //                     completed: false,
      //                   },
      //                 ],
      //               };
      //             }
      //             return card;
      //           }),
      //         ];
      //       console.log(group);
      //       return group;
      //     }),
      //   ];
      // //   ///////////////////////////////////////////////////////////////
      // case "ADD_TASK":
      //   return state.map((group) => {
      //     if (group.id === action.id)
      //       return {
      //         ...group,
      //         cards: [
      //           ...group.cards,

      //           {
      //             id: action.cardId,
      //             tasks: [
      //               {
      //                 id: "task-" + randomId(),
      //                 type: "task",
      //                 title: action.title,
      //                 description: "task description",
      //                 completed: false,
      //               },
      //             ],
      //           },
      //         ],
      //       };
      //     console.log(group);
      //     return group;
      //   });
      // case "ADD_TASK":
      //   return [
      //     ...state,
      //     {
      //       id: randomId(),
      //       title: action.payload,
      //       description: "",
      //       group: "",
      //       completed: false,
      //       tags: [],
      //     },
      //   ];
      // case "TOGGLE_TASK":
      //   return state.map((task) => {
      //     if (task.id === action.payload)
      //       return { ...task, completed: !task.completed };
      //     return task;
      //   });
      // case "DELETE_TASK":
      //   return state.filter((task) => action.payload !== task.id);
      // case "FILTER_TASK":
      //   return state.filter((task) => task.completed === false);
      // case "ADD_DESCRIPTION":
      //   return state.filter((task) => (task.description = action.payload));
      // case "ADD_TAGS":
      //   return state.filter((task) => task.tags.push(action.payload));
      // return state.map((task) => {
      //   if (task.id === action.payload.id)
      //     return { ...task, group: action.payload.group };
      //   return task;
      // });
      default:
        return state;
    }
  };
  // console.log(state.Object);
  // console.log(state.Object.cards.Object);
  // console.log(state.Object.cards.Object.tasks);

  const store = createStore(reducer, composeWithDevTools());

  return (
    // <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <MantineProvider withGlobalStyles withNormalizeCSS>
          <App />
        </MantineProvider>
      </Provider>
    </BrowserRouter>
    // </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
