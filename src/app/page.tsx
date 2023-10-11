'use client';

import Form from '@/components/Form';
import Todos from '@/components/Todos';
import { useState } from 'react';

export type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);

  console.log({todos})

  function addTodo(todo: Todo) {
    setTodos((prev) => [...prev, todo]);
  }

  function removeTodo(id: string) {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }

  function updatedTodo(id: string) {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  }

  return (
    <main className="border border-1 p-5">
      <Form addTodo={addTodo} />
      <Todos
        todos={todos}
        removeTodo={removeTodo}
        updateTodo={updatedTodo}
      />
    </main>
  );
}
