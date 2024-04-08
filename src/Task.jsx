import { useState } from "react";
import Button from "./components/Button";

const Task = () => {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }
  function addTask() {
    if (newTask.trim() !== "") {
      setTask((t) => [...t, newTask]);
      setNewTask("");
    }
  }
  function deleteTask(index) {
    const updatedTask = task.filter((_, i) => i !== index);
    setTask(updatedTask);
  }

  function moveUp(index) {
    if (index > 0) {
      const updatedTask = [...task];
      [updatedTask[index], updatedTask[index - 1]] = [
        updatedTask[index - 1],
        updatedTask[index],
      ];
      setTask(updatedTask);
    }
  }
  function moveDown(index) {
    if (index < task.length - 1) {
      const updatedTask = [...task];
      [updatedTask[index], updatedTask[index + 1]] = [
        updatedTask[index + 1],
        updatedTask[index],
      ];
      setTask(updatedTask);
    }
  }

  return (
    <>
      <h1 className="text-4xl">To do list</h1>

      <div className="my-3">
        <input
          onChange={handleInputChange}
          className="border-black border-2"
          type="text"
          placeholder="Enter a task.."
          value={newTask}
        />
        <Button handleClick={addTask}>Add</Button>
      </div>
      <div>
        <ol className="p-0">
          {task.map((task, index) => (
            <li
              className=" rounded-md border-2 border-black items-center bg-gray-400 p-3 flex gap-x-3 bold mb-2"
              key={index}
            >
              <span className="flex-1 text-center ">{task}</span>
              <Button
                handleClick={() => deleteTask(index)}
                className={"bg-red-500"}
              >
                Delete
              </Button>

              <Button handleClick={() => moveUp(index)}>👆</Button>
              <Button handleClick={() => moveDown(index)}>👇</Button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default Task;
