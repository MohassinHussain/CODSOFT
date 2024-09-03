import React, { useState } from "react";
import "./taskList.css";
import { CiEdit } from "react-icons/ci";
import { IoTrashBinSharp } from "react-icons/io5";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";

function TaskList({ tasks, updateTask, deleteTask }) {
  const [updateStates, setUpdateStates] = useState(
    Array(tasks.length).fill(false)
  );

  const onUpdate = (index) => {
    const newUpdateStates = [...updateStates];
    newUpdateStates[index] = true;
    setUpdateStates(newUpdateStates);
  };

  const onUpdateDone = (index) => {
    const newUpdateStates = [...updateStates];
    newUpdateStates[index] = false;
    setUpdateStates(newUpdateStates);
  };

  const handleTaskChange = (e, index) => {
    updateTask(index, e.target.value);
  };

  return (
    <div className="tasks-container">
      <h1>TASKS</h1>

      {tasks.map((task, index) => (
        <div className="task-div" key={index}>
          {updateStates[index] ? (
            <div className="update-box">
              <textarea
                type="text"
                className="updateTaskBox"
                value={task.description}
                onChange={(e) => handleTaskChange(e, index)}
              />
              <IoCheckmarkDoneCircleSharp
                className="done-btn"
                onClick={() => onUpdateDone(index)}
              />
            </div>
          ) : (
            <h3>
              <li>{task.description} ({task.date})</li>
            </h3>
          )}

          {!updateStates[index] && (
            <CiEdit className="update-btn" onClick={() => onUpdate(index)} />
          )}

          <IoTrashBinSharp
            className="delete-btn"
            onClick={() => deleteTask(index)}
          />
        </div>
      ))}
    </div>
  );
}

export default TaskList;
