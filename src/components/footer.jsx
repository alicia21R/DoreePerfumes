import React, { Component } from 'react';
import Socials from "./socialsites"
class Footer extends Component {
    render() { 
        return (
            <div className='footercontainer' >

            {/* right side */}
            <div></div>


            {/* left side */}
            <div>
                <Socials />
                
            </div>


            
            </div>
        );
    }
}
 
export default Footer;