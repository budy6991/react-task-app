import React from "react";
import TaskCard from "./TaskCard";

function DisplayTasks(props) {
  const taskArray = props.tasks;
  const displayAll = taskArray.map((task) => {
    return (
      <TaskCard
        taskName={task.name}
        key={task.id}
        id={task.id}
        handleRemove={props.handleRemove}
        handleEdit={props.handleEdit}
      />
    );
  });
  return <div className="flex flex-col">{displayAll}</div>;
}

export default DisplayTasks;
