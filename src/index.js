import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { randomId } from "./functions";
import { arr } from "./consts";
import { MantineProvider } from "@mantine/core";

function Main() {
  const reducer = (state = arr, action) => {
    console.log(state);
    switch (action.type) {
      case "ADD_TASK":
        return [
          ...state,
          {
            id: randomId(),
            title: action.payload,
            description: "",
            group: "",
            completed: false,
            tags: [],
          },
        ];
      case "TOGGLE_TASK":
        return state.map((task) => {
          if (task.id === action.payload)
            return { ...task, completed: !task.completed };
          return task;
        });
      case "DELETE_TASK":
        return state.filter((task) => action.payload !== task.id);
      case "FILTER_TASK":
        return state.filter((task) => task.completed === false);
      case "ADD_DESCRIPTION":
        return state.filter((task) => (task.description = action.payload));
      case "ADD_TAGS":
        return state.filter((task) => task.tags.push(action.payload));
      case "ADD_GROUP":
        return state.filter((task) => (task.group = action.payload));
      // return state.map((task) => {
      //   if (task.id === action.payload.id)
      //     return { ...task, group: action.payload.group };
      //   return task;
      // });
      default:
        return state;
    }
  };

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
