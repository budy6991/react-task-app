import React from "react";
import TaskCard from "./TaskCard";

function DisplayTasks(props) {
  const taskArray = props.tasks;
  const displayAll = taskArray.map((task) => {
    console.log(task.name, task.id);
    return <TaskCard task={task.name} key={task.id} />;
  });
  return <div className="flex flex-col">{displayAll}</div>;
}

export default DisplayTasks;
