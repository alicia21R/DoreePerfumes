import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route,Routes} from "react-router-dom";
import './index.css';
import  Home from './components/home';
import NavBar from "./components/navbar";
import Footer from "./components/footer"


ReactDOM.render(
  <Router>

    <NavBar/>
   

    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    <Footer/>
  </Router>,
 
  document.getElementById('root')
);

