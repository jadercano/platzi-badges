import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./global.css";
import Badges from "./pages/Badges";

const container = document.getElementById("app");

//const element = <h1>Hello, Platzi Badges!</h1>;
//const element = React.createElement("h1", {}, "Hello, I was created using createElement");

ReactDOM.render(<Badges />, container);
