import React, { useEffect, useState } from "react";
import "./main.css";
import TaskList from "./TasksList/TaskList";
import { IoMdAdd } from "react-icons/io";
import { FaRegCalendarAlt } from "react-icons/fa";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function TaskInput() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [calendarVisible, setCalendarVisible] = useState(false);
  const [date, setDate] = useState("");

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  const addTask = () => {
    if (task && date) {
      const newTask = { description: task, date };
      const newTasks = [...tasks, newTask];
      setTasks(newTasks);
      localStorage.setItem("tasks", JSON.stringify(newTasks));
      setTask("");
      setDate("");
    } else {
      alert("Please enter a task and select a date");
    }
  };

  const updateTask = (index, newTask) => {
    const newTasks = [...tasks];
    newTasks[index] = { ...newTasks[index], description: newTask };
    setTasks(newTasks); 
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  const calendarClicked = () => {
    setCalendarVisible(!calendarVisible);
  };

  return (
    <div className="main-container">
      <h1 className="main-head">Task Manager</h1>
      <div className="input-add">
        <textarea
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="task-input"
          placeholder="Enter task"
        />
        <FaRegCalendarAlt className="calendar-btn" onClick={calendarClicked} />
        <IoMdAdd className="add-btn" onClick={addTask} />
      </div>
      {calendarVisible && (
        <Calendar
          onClickDay={(value) => {
            const selectedDate = `${value.getDate()}-${value.getMonth() + 1}-${value.getFullYear()}`;
            setDate(selectedDate);
          }}
        />
      )}
      {date && (
        <div className="set-date">
          <h2>Selected date: {date}</h2>
        </div>
      )}
      <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
    </div>
  );
}

export default TaskInput;
