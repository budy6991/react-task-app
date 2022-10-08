import React from "react";

function TaskCard({ task }) {
  return (
    <div className="bg-red-300 m-2">
      {task}
      <button className="bg-red-700">Edit</button>
      <button className="bg-yellow-500">Remove</button>
    </div>
  );
}

export default TaskCard;
