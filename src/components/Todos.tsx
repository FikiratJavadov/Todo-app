import { Todo as TodoType } from '@/app/page';
import React from 'react';
import Todo from './Todo';

type TodosProps = {
  todos: TodoType[];
  updateTodo: (id: string) => void;
  removeTodo: (id: string) => void;
};

const Todos = (props: TodosProps) => {
  return (
    <div className="flex flex-col gap-3">
      {props.todos.map((todo) => (
        <Todo
          t={{ ...todo }}
          updatedTodo={() => props.updateTodo(todo.id)}
          removeTodo={() => props.removeTodo(todo.id)}
          key={todo.id}
        />
      ))}
    </div>
  );
};

export default Todos;
