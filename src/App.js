import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Social from "./components/Social";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
require("typeface-kaushan-script");

function App() {
  return (
    <div className="App">
      <Route path="/" component={Social} />
      <Route path="/" component={Navbar} />
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
