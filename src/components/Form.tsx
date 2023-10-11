import { Todo } from '@/app/page';
import React, { useRef } from 'react';

const Form = (props: { addTodo: (todo: Todo) => void }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!inputRef.current?.value.trim()) return;

    props.addTodo({
      id: Date.now().toString(),
      title: inputRef.current?.value,
      completed: false,
    });

    inputRef.current.value = ""
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-black p-3 rounded-md flex gap-2"
    >
      <input ref={inputRef} />
      <button>Add todo</button>
    </form>
  );
};

export default Form;
