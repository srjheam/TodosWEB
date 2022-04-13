import React from 'react';
import { useSelector } from 'react-redux';
import { selectTodos } from '../../app/todosSlice';

function TodoList() {
  const todoList = useSelector(selectTodos);

  return (
    <div className="TodoList">
      <ul>
        {todoList.map(t => <li key={t.id}>{t.title}</li>)}
      </ul>
    </div>
  );
}

export default TodoList;
