import { getAllTodos, deleteTodoById, addTodo } from "./api.mjs";
import EventEmitter from "./pubsub.mjs";

const todoTemplate = document.querySelector("#todoTemplate");
const todoList = document.querySelector("#todoList");
const addBtn = document.querySelector("#addBtn");
const todoInput = document.querySelector("#todoInput");

const emitter = new EventEmitter();

//impure function
function renderTodo(todoDescription) {
  let todo = todoTemplate.content.cloneNode(true);
  todo.firstElementChild.append(todoDescription);
  todoList.append(todo);
  todoInput.value = "";
}

emitter.subscribe("todoAdded", renderTodo);

addBtn.addEventListener("click", (event) => {
  emitter.publish("todoAdded", todoInput.value);
});

todoList.addEventListener("click", (event) => {
  const li = event.target;
  li.remove();
});
