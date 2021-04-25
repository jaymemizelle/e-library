import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavTabs from "./components/NavTabs/NavTabs";
import Search from "../src/pages/Search/Search";
import Library from "../src/pages/Library/Library";


function App() {
  return (
    <>
      <Router>
        <NavTabs/>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/library" component={Library} />
        </Switch>
      </Router>
    </>
  );
}


export default App;
