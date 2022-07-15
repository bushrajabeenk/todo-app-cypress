import React from "react";

const TodoList = ({ todos = [] }) => {
  return (
    <div>
      {todos.map((todo) => (
        <li key={todo.id} data-testid="todo-item-val">
          <input
            data-testid="todo-item-checkbox"
            type="checkbox"
            value={todo.isCompleted}
          />
          <span>{todo.value}</span>
        </li>
      ))}
    </div>
  );
};

export default TodoList;
