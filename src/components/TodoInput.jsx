import React from "react";

const TodoInput = ({ value, handleChange, handleSubmit }) => {
  const submit = (e) => {
    e.preventDefault();
    handleSubmit();
  };
  return (
    <form onSubmit={submit}>
      <input
        id="todo-inp"
        data-testid="todo-inp"
        type="text"
        value={value}
        onChange={handleChange}
        autoFocus
      />
      <button data-testid="todo-btn" type="submit">
        Add
      </button>
    </form>
  );
};

export default TodoInput;
