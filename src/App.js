import Navbar from "./components/Navbar";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";
import Home from "./components/pages/Home";


import {BrowserRouter as Router,Routes,Route } from "react-router-dom";
import React from 'react';
import './App.css';
function App() {
  return (
    <>
    <Router>
    <Navbar/>
<Routes>
    <Route path='/' exact Component={Home} />
    <Route path='/services' Component={Services} />
    <Route path='/products'  Component={Products} />
    <Route path='/sign-up'  Component={SignUp} />
</Routes>
    </Router>
     </>
  );
}

export default App;