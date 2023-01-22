import React, { useState } from "react";
import Todo from "./components/Todo";

const App = () => {
  const [newTodo, setNewTodo] = useState({
    title: "",
    content: "",
  });
  const [todos, setTodos] = useState([]);

  const handleChangeInput = ({ target }) => {
    if (target.value !== "") {
      if (target.placeholder === "Title") {
        setNewTodo({ ...newTodo, title: target.value });
      } else {
        setNewTodo({ ...newTodo, content: target.value });
      }
    }
  };

  const handleClickAddTodo = () => {
    if (newTodo.title !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo({ ...newTodo, content: "", title: "" });
    }
  };

  const handleDelete = (index) => {
    setTodos(todos.filter((todo, i) => i !== index));
  };

  return (
    <div>
      <h1>React app - Todo List</h1>
      <div className="add-todo">
        <ul>
          <li>
            <div className="input-title">
              <input
                type="text"
                placeholder="Title"
                value={newTodo.title}
                onChange={handleChangeInput}
              />
            </div>
          </li>
          <li>
            <button onClick={handleClickAddTodo}>add Todo</button>
          </li>
        </ul>
        <div className="input-content">
          <input
            type="text"
            placeholder="Content"
            value={newTodo.content}
            onChange={handleChangeInput}
          />
        </div>
      </div>
      {todos.map((todo, index) => (
        <Todo
          todoTitle={todo.title}
          todoContent={todo.content}
          key={index}
          index={index}
          onDelete={() => handleDelete(index)}
        />
      ))}
    </div>
  );
};

export default App;
