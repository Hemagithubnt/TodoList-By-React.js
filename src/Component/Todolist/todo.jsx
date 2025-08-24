import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Button from '@mui/material/Button';

export default function Todolist() {
  const [todos, setTodos] = useState([{ task: "sample Task", id: uuidv4() }]);
  const [newTodo, setNewTodo] = useState("");

  let AddTask = (e) => {
    e.preventDefault();
    if (newTodo.trim() !== "") {     // Prevent empty task
      setTodos([...todos, { task: newTodo, id: uuidv4() }]);
      setNewTodo("");
    }
  };

  let handleChange = (event) => {
    setNewTodo(event.target.value);
  };

  let handlerDelete = (id) => {
    setTodos((todos) =>
      todos.filter((current) => current.id !== id)
    );
  };
  return (
    <div className="relative left-130 top-40 w-[20%] border rounded-xl bg-green-300 p-4">
      <form>
        <div className="flex flex-col items-center justify-right gap-5">
          <h1 className="text-[20px] font-bold">Todo List</h1>
          <input
            type="text"
            placeholder="add a task"
            value={newTodo}
            onChange={handleChange}
            className="border rounded-2xl p-2 outline-black focus:outline-[.1px] bg-white"
          />

          <Button
            className=" !border !rounded-2xl !p-2 !bg-red-500 !text-white"
            onClick={AddTask}>
            Add Task
          </Button>

          <h4 className="border-b-2 border-t-2 w-full text-center font-[600] text-[20px] ">Todo</h4>
          <ol type="1">
            {todos.map((todo) => (
              <li key={todo.id} className="flex items-center justify-center gap-3 mb-4 ">
                {todo.task}
                {todo.task.trim() !== "" && ( // Show delete only for valid tasks
                  <Button
                    className=" !border !rounded-2xl !p-2 !bg-amber-300  "
                    onClick={() => handlerDelete(todo.id)}
                  > Delete Button</Button>
                 )}
              </li>
                
            ))}
          </ol>
        </div>
      </form>
    </div>
  );
}
