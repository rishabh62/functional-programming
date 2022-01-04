const MSGS = {
  TODO_INPUT: "TODO_INPUT",
  ADD_TODO: "ADD_TODO",
};

function todoInput(inputValue) {
  return {
    type: MSGS.TODO_INPUT,
    inputValue,
  };
}

function addTodo() {
  return {
    type: MSGS.ADD_TODO,
  };
}

function update(msg, model) {
  switch (msg.type) {
    case MSGS.TODO_INPUT:
      return { ...model, inputValue: msg.inputValue };

    case MSGS.ADD_TODO:
      let updatedModel = { ...model };
      updatedModel.todos.push({
        id: model.todos.length + 1,
        description: updatedModel.inputValue,
      });
      updatedModel.inpuValue = "";
      return updatedModel;
  }
  return model;
}

export { todoInput, addTodo };
export default update;
