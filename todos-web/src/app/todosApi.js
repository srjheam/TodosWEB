export const getTodos = async () =>
  fetch('/todos')
    .then(
      (response) => response.json(),
      (error) => defaultErrorHandler(error)
    );

export const postTodo = async (todo) =>
  fetch('/todos', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(todo)
  })
  .then(
    (response) => response.json(),
    (error) => defaultErrorHandler(error)
  );

const defaultErrorHandler = (error) =>
  alert(error);
