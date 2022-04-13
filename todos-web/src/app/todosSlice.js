import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as StatusConstants from './statusConstants';
import * as Api from './todosApi';

const initialState = {
  todoList: [],
  status: StatusConstants.IDLE
};

export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async () =>
    await Api.getTodos()
);

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    createTodo: (state, action) => {
      state.todoList.push(action.payload)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = StatusConstants.FETCHING;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todoList = action.payload;
        state.status = StatusConstants.IDLE;
      });
  },
});

export const { createTodo } = todosSlice.actions;

export const selectTodos = (state) => state.todos.todoList;

export default todosSlice.reducer;
