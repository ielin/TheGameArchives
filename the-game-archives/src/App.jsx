import { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar></Navbar>
        <div className="content">
          <Routes>
            <Route></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
