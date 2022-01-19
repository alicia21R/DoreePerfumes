import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route,Routes} from "react-router-dom";
import './index.css';
import { Home }from './components';
import NavBar from "./components/navbar";


ReactDOM.render(
  <Router>

    <NavBar/>

    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
  </Router>,
 
  document.getElementById('root')
);

