import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import { store } from "./store";
import { Quotes } from "./containers";

const App: React.FC<{}> = () => (
  <Provider store={store}>
    <Quotes />
  </Provider>
);
render(<App />, document.getElementById("root"));
