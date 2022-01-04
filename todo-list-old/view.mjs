import { todoInput, addTodo } from "./update.mjs";

function addBtnView(dispatch, model) {
  const button = document.createElement("button");
  button.addEventListener("click", () => dispatch(addTodo()));
  button.append("Add");
  return button;
}

function inputView(dispatch, model) {
  if (model.inputValue) {
    return document.querySelector("#todoInput");
  }
  const input = document.createElement("input");
  input.id = "todoInput";
  input.type = "text";
  input.value = model.inputValue;
  input.addEventListener("input", (e) => dispatch(todoInput(e.target.value)));
  return input;
}

function todoInputButtonView(dispatch, model) {
  const div = document.createElement("div");
  div.append(inputView(dispatch, model), addBtnView(dispatch, model));
  return div;
}

function todoListView(dispatch, model) {
  let ul = document.createElement("ul");
  let todos = model.todos.map((item) => {
    const li = document.createElement("li");
    li.setAttribute("id", item.id);
    li.append(item.description);
    return li;
  });
  ul.append(...todos);
  return ul;
}

function view(dispatch, model) {
  const main = document.createElement("main");
  main.append(
    todoInputButtonView(dispatch, model),
    todoListView(dispatch, model)
  );
  return main;
}

export default view;
