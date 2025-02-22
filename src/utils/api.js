const apiBaseUrl = 'http://localhost:8000';

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

async function fetchApi(url, method, data, headers) {
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

  const response = await fetch(url, options);
  return handleApiResponse(response);
}

export async function fetchTodosApi() {
  return await fetchApi(endpoints.getTodos(), 'GET');
}

export async function fetchTodoApi(todoId) {
  return await fetchApi(endpoints.getTodo(todoId), 'GET');
}

export async function createTodoApi(todo) {
  return await fetchApi(endpoints.createTodo(), 'POST', todo);
}

export async function deleteTodoApi(todoId) {
  return await fetchApi(endpoints.deleteTodo(todoId), 'DELETE');
}

export async function updateTodoApi(todoId, data) {
  return await fetchApi(endpoints.updateTodo(todoId), 'PATCH', data);
}

export async function loadTodos() {
  return await fetchTodosApi();
}