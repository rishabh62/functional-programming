import initialModel from "./model.mjs";
import update from "./update.mjs";
import view from "./view.mjs";
/*

--model
[
    {id: 1, description: 'read the book'},
    {id: 2, description: 'watch netflix'}
]


*/

function app(initialModel, update, view, node) {
  let model = initialModel;
  let currentView = view(dispatch, model);
  node.append(currentView);
  function dispatch(msg) {
    model = update(msg, model);
    const updatedView = view(dispatch, model);
    currentView.replaceWith(updatedView);
    currentView = updatedView;
  }
}

app(initialModel, update, view, document.querySelector("#app"));

// export default app;
