import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { Detail } from './components/pages/Detail';
import Login from './components/pages/Login';



function App() {
  return (
    <Router>
      <Header/>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route  path="/detail/:id" element={<Detail />} />
      <Route  path="/login" element={<Login />} />
    </Routes>
  </Router>
  );
}

export default App;


