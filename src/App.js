import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Social from "./components/Social";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Gallery from "./components/Gallery";

require("typeface-kaushan-script");

function App() {
  return (
    <div className="App" style={{ overflow: "auto" }}>
      <Route component={Social} />
      <Route component={Navbar} />
      <Switch>
        <Route path="/" exact>
          <Route component={Home} />
        </Route>
        <Route path="/gallery">
          <Route component={Gallery} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
