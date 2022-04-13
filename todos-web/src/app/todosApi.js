export const getTodos = async () =>
  fetch('/todos')
    .then(
      (response) => response.json(),
      (error) => defaultErrorHandler(error)
    );

const defaultErrorHandler = (error) =>
  alert(error);
