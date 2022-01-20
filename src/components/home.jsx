import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import ReactDOM from 'react-dom';

class Home extends Component{
    render( ){
        return(
            <div className='container'>
                {/* landing page*/}
               <div className='containerdesc'>
                   {/* rignt content */}
                     <div className='rightcontent'>

                     <li className='sidebarlisting'> <Link to href='/' className='sidebarlink'> Products</Link> </li>
                     <li className='sidebarlisting'> <Link to href='#' className='sidebarlink'> Buy Now</Link> </li>
                     <li className='sidebarlisting'> <Link to href='/' className='sidebarlink'> Shopping</Link> </li>
                     
                          <h4 className='desc'>HAND MADE OIL BASED FRAGRANCES <br/> MADE FROM THE PEARL OF AFRICA <br/> CHEMICAL AND PARABEN FREE <br />100% NATURAL</h4> 
                     
                       
                     </div>
                    
                </div>
              

            </div>
        )
    }
}

export default Home;