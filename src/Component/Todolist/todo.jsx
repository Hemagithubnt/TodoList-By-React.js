import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Button from '@mui/material/Button';

export default function AddEmployee() {
  const [todos, setTodos] = useState([{ task: "sample Task", id: uuidv4() }]);
  const [Name, setName] = useState("");


  let AddName = (e) => {
    e.preventDefault();
    if (Name.trim() !== "") {     // Prevent empty task
      setTodos([...todos, { task: Name, id: uuidv4() }]);
      setName("");
    }
  };

  let handleChange1 = (event) => {
    setName(event.target.value);
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
          <h1 className="text-[20px] font-bold">Add Employee</h1>
          
          <input
            type="text"
            placeholder="Name"
            value={Name}
            onChange={handleChange1}
            className="border rounded-2xl p-2 outline-black focus:outline-[.1px] bg-white"
          />
          <Button
            className=" !border !rounded-2xl !p-2 !bg-red-500 !text-white"
            onClick={AddName}>
            Add Employee
          </Button>

          <h4 className="border-b-2 border-t-2 w-full text-center font-[600] text-[20px] ">Employee Table</h4>
          <ol type="1">
            {todos.map((todo) => (
              <li key={todo.id} className="flex items-center justify-center gap-3 mb-4 ">
                {todo.task}
                {todo.task.trim() !== "" && ( // Show delete only for valid tasks
                  <Button
                    className=" !border !rounded-xl !p-2 !bg-amber-300  "
                    onClick={() => handlerDelete(todo.id)}
                  > Delete</Button>
                 )}
              </li> 
            ))}
          </ol>
        </div>
      </form>
    </div>
  );
}
