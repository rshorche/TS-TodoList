import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import { Todo as TodoType } from "./Todos.types";

function TodosWrapper() {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const addTodo = (title: string) => {
    setTodos([
      ...todos,
      {
        id: crypto.randomUUID(),
        title,
        completed: false,
      },
    ]);

    return true;
  };

  const deleteTodo = (id: string) => {
    // Codes ...
  };

  const toggleComplete = (id: string) => {
    // Codes ...
  };

  return (
    <div className="TodoWrapper">
      <h1>Todo List ❤️ </h1>
      {/* Add New Todo Form */}

      <TodoForm addTodo={addTodo} />

      {/* display todos */}
      {todos.map((todo) => (
        <Todo key={todo.id} />
      ))}
    </div>
  );
}

export default TodosWrapper;
