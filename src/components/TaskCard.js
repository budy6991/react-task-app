import { editableInputTypes } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";

function TaskCard({ taskName, id, handleRemove, handleEdit }) {
  const [editing, setEditing] = useState(null);
  const [newInput, setNewInput] = useState(taskName);

  const startEditing = () => {
    setEditing(true);
  };

  const stopEditing = () => {
    handleEdit(newInput, id);
    setEditing(false);
  };

  const handleEditCard = (event) => {
    setNewInput(event.target.value);
  };

  return (
    <div className="bg-red-400 m-2 p-5 rounded-md flex items-center animate-pulseOne">
      {editing ? (
        <input
          onChange={handleEditCard}
          value={newInput}
          className="flex-1 rounded-md p-1"
        />
      ) : (
        <div className="flex-1 text-zinc-800">{taskName}</div>
      )}
      {editing ? (
        <button
          className="rounded-full bg-zinc-700  text-white hover:bg-white hover:text-black hover:shadow-lg p-2 mr-4 ml-2 items-center animate-pulse"
          onClick={stopEditing}
        >
          Finish
        </button>
      ) : (
        <button
          className="bg-red-700 mr-6 ml-2 p-2 rounded-full bg-yellow-500 hover:bg-white hover:shadow-lg"
          onClick={startEditing}
        >
          Edit
        </button>
      )}

      <button
        className="bg-red-600 p-2 rounded-full hover:text-white hover:shadow-lg"
        onClick={() => handleRemove(id)}
      >
        Remove
      </button>
    </div>
  );
}

export default TaskCard;
