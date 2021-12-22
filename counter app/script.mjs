/*
 -- data model
 model = 0

 -- views
 counterView
 buttonGroupView

 -- Interactions/model updates
 increment
 decrement

*/

//-- data model
let initialModel = 0;

//-- interactions/updates
const MSGS = {
  increment: "increment",
  decrement: "decrement",
};

function increment(model) {
  return model + 1;
}

function decrement(model) {
  return model - 1;
}

//-- views
function counterView(model) {
  let div = document.createElement("div");
  div.id = "counter";
  div.append(model);
  return div;
}

function buttonGroupView(dispatch, model) {
  let div = document.createElement("div");
  let incrementBtn = document.createElement("button");
  let decrementBtn = document.createElement("button");
  incrementBtn.append("+");
  decrementBtn.append("-");
  incrementBtn.onclick = () => dispatch(MSGS.increment);
  decrementBtn.onclick = () => dispatch(MSGS.decrement);
  div.append(incrementBtn, decrementBtn);
  return div;
}

//impure code below
function updateCounter(model) {
  document.querySelector("#counter").replaceWith(counterView(model));
}

function render(model) {
  let section = document.createElement("section");
  section.append(counterView(model), buttonGroupView(dispatch, model));
  document.querySelector("#app").append(section);
  function dispatch(msg) {
    switch (msg) {
      case MSGS.increment:
        model = increment(model);
        updateCounter(model);
        break;
      case MSGS.decrement:
        model = decrement(model);
        updateCounter(model);
        break;
      default:
        updateCounter(model);
    }
  }
}

render(initialModel);
