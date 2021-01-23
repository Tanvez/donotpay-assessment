import React from "react";
import "./App.css";
import { Column } from "./Column";

const data = [
  {
    title: "Pending",
    itemsArr: [
      {
        id: "todo1",
        name: "todo1",
        description: "description about something",
      },
      {
        id: "todo2",
        name: "todo2",
        description: "description about something",
      },
      {
        id: "todo3",
        name: "todo3",
        description: "description about something",
      },
    ],
  },
  {
    title: "In Progress",
    itemsArr: [
      {
        id: "prog1",
        name: "in progress 1",
        description: "description about something",
      },
      {
        id: "prog2",
        name: "in progess 2",
        description: "description about something",
      },
      {
        id: "prog3",
        name: "in progess 3",
        description: "description about something",
      },
    ],
  },
  {
    title: "Complete",
    itemsArr: [
      { id: "done1", name: "Done", description: "description about something" },
    ],
  },
];
const style = {
  display: "flex",
};

function App() {
  return (
    <div className="App" style={style}>
      {data.map((col, idx) => (
        <Column key={idx} {...col} />
      ))}
    </div>
  );
}

export default App;
