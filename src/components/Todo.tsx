import { Todo } from '@/app/page';
import React from 'react';

type TodoProps = {
  t: Todo;
  removeTodo: () => void;
  updatedTodo: () => void;
};

const Todo = (props: TodoProps) => {
  return (
    <div>
      <h1>{props.t.title}</h1>
      <button
        onClick={props.updatedTodo}
        className={`${props.t.completed ? 'bg-red-500' : ''}`}
      >
        {props.t.completed ? 'uncompleted' : 'completed'}
      </button>
      <button
        onClick={props.removeTodo}
        className={`${props.t.completed ? 'line-through' : ''}`}
      >
        remove
      </button>
    </div>
  );
};

export default Todo;
