import React from "react";
import Find from "./component";
import { Provider } from "react-redux";
import Store from "./Store";

function App() {
  return (
    <Provider store={Store}>
    <Find/>
    </Provider>
  );
}

export default App;
