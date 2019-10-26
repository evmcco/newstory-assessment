import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Latest from "./Latest";

function App() {
  return (
    <Router>
      <Route path="/latest" exact component={Latest} />
    </Router>
  );
}

export default App;
