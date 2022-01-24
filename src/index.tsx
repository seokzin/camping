import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { app } from "./firebase";

console.log(app);

ReactDOM.render(<App />, document.getElementById("root"));
