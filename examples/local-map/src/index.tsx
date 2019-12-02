import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import { Local, model } from "./model";

import "./index.scss";

export const initLocal: Partial<Local> = {
  center: [51.507351, -0.127758],
  zoom: 12,
};

const { Provider, store } = model.createStore({
  logger: true,
  initState: {},
  initLocal,
});

const render = () => {
  ReactDOM.render(
    <Provider>
      <App />
    </Provider>,
    document.getElementById("root"),
  );
};

if (module.hot) {
  module.hot.accept("./App", () => {
    render();
  });
}

render();

(window as any).store = store;
