import React from "react";
import TaskCard from "./TaskCard";

function DisplayTasks(props) {
  const taskArray = props.tasks;
  const displayAll = taskArray.map((task) => {
    return <TaskCard task={task} />;
  });
  return <div className="flex flex-col">{displayAll}</div>;
}

export default DisplayTasks;
