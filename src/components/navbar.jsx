import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../index.css'

class NavBar extends Component {
    render() { 
        return ( 

            <div className='navbarcontainer'>
                <div className='navbarlogo'>
                    <h3>DOREE PERFUMES</h3>
                </div>
                <div className='navbaritems'>
                    <li className='navbarlisting'> <Link to href='/' className='navbarlink'> Home</Link> </li>
                    <li className='navbarlisting'> <Link to href='#' className='navbarlink'> About</Link> </li>
                    <li className='navbarlisting'> <Link to href='#' className='navbarlink'>Products</Link></li>
                    <li className='navbarlisting'> <Link to href='#' className='navbarlink'> Contact</Link> </li>   
                </div>
            </div>
        );
    }
}
 
export default NavBar;