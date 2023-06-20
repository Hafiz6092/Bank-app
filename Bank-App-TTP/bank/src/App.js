import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link }from "react-router-dom";
import Home from "./components/Home";
import Debit from "./components/Debit";


function App() {
  return (
    <Router>
      <div className="App">
        {/*Navigation */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Home/*" element={<Home />} />
      </Routes>
      </div>
    </Router>
    
  );
}

export default App;
