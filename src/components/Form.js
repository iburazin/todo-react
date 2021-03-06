import React from "react";
import useId from "react-id-generator";

export default function Form({ setInputText, setTodos, todos, inputText, setStatus }) {
  const uniqueId = useId();

  const inputTextHandler = e => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = e => {
    e.preventDefault();
    if (inputText === "") return;
    setTodos([...todos, { text: inputText, completed: false, id: uniqueId }]);
    setInputText("");
  };

  const statusHandler = e => {
    setStatus(e.target.value);
  };

  return (
    <form>
      <input value={inputText} onChange={inputTextHandler} placeholder="enter task" type="text" className="todo-input" />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onClick={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}
