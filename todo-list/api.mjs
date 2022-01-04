const BASE_URL = `https://api-nodejs-todolist.herokuapp.com`;
const TOKEN = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWMyZWQxNzI2NTE2MDAwMTc5MWU2MTciLCJpYXQiOjE2NDAxODk4MDF9.gLaJjFDEp6-5PONnZX1PTEytdNEdXqvlNxdsC3Ym7d0`;

async function getAllTodos() {
  try {
    const response = await fetch(`${BASE_URL}/task`, {
      method: "GET",
      headers: { Authorization: `Bearer ${TOKEN}` },
    });
    const todos = await response.json();
    return todos;
  } catch (error) {
    console.log("error occured while fetching todos", error);
    throw error;
  }
}

async function deleteTodoById(todoId) {
  try {
    const response = await fetch(`${BASE_URL}/task`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${TOKEN}` },
    });
    const { success } = await response.json();
    return success;
  } catch (error) {
    console.log(`error occured while deleting todo with id ${todoId}`, error);
    throw error;
  }
}

async function addTodo(todoDescription) {
  try {
    const response = await fetch(`${BASE_URL}/task`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ description: todoDescription }),
    });
    const { success } = await response.json();
    return success;
  } catch (error) {
    console.log("error occured while adding todo", error);
    throw error;
  }
}

export { getAllTodos, deleteTodoById, addTodo };
