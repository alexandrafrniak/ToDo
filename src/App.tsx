import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Pages from "./Components/Pages";

const App: React.FC = () => {
  return (
    <Router>
      <Pages />
    </Router>
  );
};

export default App;
