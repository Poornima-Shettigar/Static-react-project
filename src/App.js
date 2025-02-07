//import logo from './logo.svg';
import './App.css';
import React  from 'react';
import Profile from './Profile/Profile';
import Table from './Table/Table';
import Account from './account/Account';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    
    <>
   {/* <div className="w-100"*/}
   <Router>
    <Routes>
      <Route path={"/*"} element={<Profile/>} />
      <Route path={"/Table"} element={<Table/>}/>
      <Route path={"/Account"} element={<Account/>}/>
      </Routes>
      </Router>
      </>
  
  );
}

export default App;
