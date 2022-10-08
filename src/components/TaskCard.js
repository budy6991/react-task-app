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
    <div className="bg-red-300 m-2">
      {editing ? (
        <input onChange={handleEditCard} value={newInput} />
      ) : (
        <div>{taskName}</div>
      )}
      {editing ? (
        <button onClick={stopEditing}>Finish</button>
      ) : (
        <button className="bg-red-700" onClick={startEditing}>
          Edit
        </button>
      )}

      <button className="bg-yellow-500" onClick={() => handleRemove(id)}>
        Remove
      </button>
    </div>
  );
}

export default TaskCard;
