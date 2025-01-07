import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [task, setTask] = useState("");
  const [todoItems, setTodoItems] = useState<string[]>([]);
  const handleChange = (e: any) => {
    setTask(e.target.value);
  };

  const handleClick = () => {
    setTask("");
    setTodoItems([...todoItems, task]);
  };

  const handleEdit = (itemIndex: number) => {
    const name = prompt("Edit the todo");
    console.log("name", name);
    if (name !== null) {
      todoItems[itemIndex] = name as string;
      setTodoItems([...todoItems]);
    }
  };

  const handleDelete = (itemIndex: number) => {
    const newItems = [...todoItems];
    newItems.splice(itemIndex, 1);
    setTodoItems([...newItems]);
  };

  return (
    <div className='container'>
      <div className='content'>
        <h1>TODO List</h1>
        <input
          autoComplete='off'
          value={task}
          name='task'
          placeholder='add item..'
          onChange={(e) => handleChange(e)}
        />
        <button className='add' onClick={() => handleClick()}>
          ADD
        </button>
        {todoItems.map((item, i) => {
          return (
            <div key={i} className='todoitems'>
              <span>{item}</span>
              <div className='button-group'>
                <button className='delete' onClick={() => handleDelete(i)}>
                  Delete
                </button>
                <button className='edit' onClick={() => handleEdit(i)}>
                  Edit
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
