import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  fetchTodos
} from './app/todosSlice';
import TodoList from './features/todoList/TodoList';
import AddTodo from './features/addTodo/AddTodo';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <TodoList />
      <footer>
        <AddTodo />
      </footer>
    </div>
  );
}

export default App;
