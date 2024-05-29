import { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar></Navbar>
        <div className="content">
          <Routes>
            <Route exact path='/' element={<Home/>}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
