import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTodo } from '../../app/todosSlice';
import TitleInput from '../titleInput/TitleInput';
import DueDateInput from '../dueDateInput/DueDateInput';
import * as Api from '../../app/todosApi';

function AddTodo() {
  const dispatch = useDispatch();

  const [id, setId] = useState(0);
  const [title, setTitle] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);
  const [dueDate, setDueDate] = useState('');

  const addTodo = async () => {
    const todo = {
      id,
      title,
      isCompleted,
      dueDate: Number.isInteger(dueDate) ? dueDate : null
    };

    const response = await Api.postTodo(todo);

    todo.id = response.id;

    dispatch(createTodo(todo));

    setId(0);
    setTitle('');
    setIsCompleted(false);
    setDueDate('');
  };

  const handleKeyDown = async (event) => {
    if (event.key === 'Enter') {
      await addTodo();
    }
  };

  return (
    <div className="AddTodo">
      <TitleInput title={title} handleTitleChange={setTitle} handleKeyDown={handleKeyDown}  />
      <div>
        <DueDateInput dueDate={dueDate} onChange={setDueDate} />
        <button onClick={addTodo}>Add</button>
      </div>
    </div>
  );
}

export default AddTodo;
