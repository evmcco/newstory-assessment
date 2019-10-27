import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Latest from "./Latest";
import Search from "./Search";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Latest} />
      <Route path="/search" exact component={Search} />
    </Router>
  );
}

export default App;
