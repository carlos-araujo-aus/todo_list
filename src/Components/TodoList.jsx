import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {

  const [headingInput, setHeadingInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [listImputs, setListImputs] = useState({});

  const handleAddTodo = () => {
    if(headingInput.trim() !== "") {
      setTodos([...todos, {heading: headingInput, list: []}]);
      setHeadingInput("");
    }
  }

  return (
    <>
      <div className="todo-container">
        <h1 className="title">My Todo List</h1>
        <div className="input-container">
          <input
            type="text"
            className="heading-input"
            placeholder="Enter heading"
            value={headingInput}
            onChange={(e) => {setHeadingInput(e.target.value)}}
          />
          <button className="add-list-button" onClick={handleAddTodo}>Add Heading</button>
        </div>
      </div>
      <div className="todo_main">
        {todos.map((todo, index) => (
          <div key={index} className="todo-card">
            <div className="heading_todo">
              <h3>{todo.heading}</h3>
              <button className="delete-button-heading" onClick={() => handleDeleteTodo(index)}>Delete Heading </button>
              <div className="add_list">
                <input 
                  type="text"
                  className="list-input"
                  placeholder="Add List"
                  value={listImputs[index] || ""}
                  onChange={(e) => handleListInputChange(index, e.target.value)}
                />
              <button className="add-list-button" onClick={() => handleAddList(index)}>Add List</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TodoList;
