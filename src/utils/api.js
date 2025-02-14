const apiBaseUrl = 'http://localhost:3000';

const endpoints = {
  getTodos: () => `${apiBaseUrl}/todos`,
  getTodo: (id) => `${apiBaseUrl}/todos/${id}`,
  createTodo: () => `${apiBaseUrl}/todos`,
  updateTodo: (id) => `${apiBaseUrl}/todos/${id}`,
  deleteTodo: (id) => `${apiBaseUrl}/todos/${id}`,
};

async function handleApiResponse(response) {
  try {
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
}

async function fetchApi(apiBaseUrl, method, data, headers) {
  const _headers = {
    'Content-Type': 'application/json',
    ...headers,
  };

  const options = {
    method,
    headers: _headers,
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  const response = await fetch(apiBaseUrl, options);
  // const response = await fetch(endpoints.getTodos(), options);
  return handleApiResponse(response);
}

// Function to fetch all todos
async function fetchTodosApi() {
  return await fetchApi(endpoints.getTodos(), 'GET');
}

// Function to fetch a single todo by ID
async function fetchTodoApi(todoId) {
  return await fetchApi(endpoints.getTodo(todoId), 'GET');
}

// Function to create a new todo
async function createTodoApi(todo) {
  return await fetchApi(endpoints.createTodo(), 'POST', todo);
}

// Function to delete a todo by ID
async function deleteTodoApi(todoId) {
  return await fetchApi(endpoints.deleteTodo(todoId), 'DELETE');
}

// Function to update a todo by ID
async function updateTodoApi(todoId, data) {
  return await fetchApi(endpoints.updateTodo(todoId), 'PATCH', data);
}

async function loadTodos() {
  return await fetchTodosApi(); // Returns todos without modifying UI
}

export {
  fetchTodosApi,
  fetchTodoApi,
  createTodoApi,
  deleteTodoApi,
  updateTodoApi,
  loadTodos,
};

const response = await fetch('http://localhost:3000/todos/');
const jsonData = await response.json(); // Convert response to JSON
console.log("JSON Response:", jsonData);
