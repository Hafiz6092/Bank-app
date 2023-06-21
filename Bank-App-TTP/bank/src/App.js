import './App.css';
import React,{useState, useEffect} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Routes, Route, Link }from "react-router-dom";
import Home from "./components/Home";
import Profile from './components/profile';
import Debit from "./components/Debit";
import Credit from "./components/Credit";



function App() {
  const [debitList, setDebitList] = useState(0);
  const[creditList, setCreditList] = useState(0);

  const apiCredit = 'https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/credits';
  const apiDebit = 'https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/debits';


  useEffect(() =>{
    async function fetchCredit(){
      try{
          const resCredit = await axios.get(apiCredit);
          setCreditList(resCredit.data);
      }catch(error){
          console.error("Error" + error.message);
      }
    }
      fetchCredit();
  },[creditList]);

  useEffect (() =>{
    async function fetchDebit(){
      try{
        const resDebit = await axios.get(apiDebit);
        setDebitList(resDebit.data);
      }catch(error){
        console.error("Error" + error.message);
      }
    }
    fetchDebit();
  },[debitList]);

  function balance(debit, credit){
    return debit - credit;
  }
  const bal = balance(debitList, creditList);
  const creditAmount = creditList;
  const debitAmount = debitList;

  return (
    <Router>
      <div className="App">
        {/*Navigation */}
        <nav className="navbar">
          <ul className="ultag">
            <li className="litag">
              <Link to="/">Home</Link>
            </li>
            <li className="litag">
              <Link to="/profile">Profile</Link>
            </li>
            <li className="litag">
              <Link to="/credit">Credit</Link>
            </li>
            <li className="litag">
              <Link to="/debit">Debit</Link>
            </li>
          </ul>
        </nav>
        {/**Routes */}
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/profile" element={<Profile bal = {bal} />} />
        <Route path="/credit" element={<Credit credit = {creditAmount} />} />
        <Route path="/debit" element={<Debit debit = {debitAmount} />} />
      </Routes>
      </div>
    </Router>
    
  );
}

export default App;
