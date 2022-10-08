import React from "react";

function TaskCard({ taskName, id, handleRemove, handleEdit }) {
  //When we click the edit button, isEditing becomes true, if isEditing is true, then we substitute the taskName, by an input, whose value we will move up to the manager to update the array.

  return (
    <div className="bg-red-300 m-2">
      {taskName}
      <button className="bg-red-700" onClick={() => handleEdit()}>
        Edit
      </button>
      <button className="bg-yellow-500" onClick={() => handleRemove(id)}>
        Remove
      </button>
    </div>
  );
}

export default TaskCard;
