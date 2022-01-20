import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{
   faFacebook,
   faTwitter,
   faInstagram 
}from "@fortawesome/free-brands-svg-icons"
class Socials extends Component {
    state = {  } 
    render() { 
        return (
            <div>
               <a href="https://www.twitter.com" className="socialicons">
                   <FontAwesomeIcon icon={faTwitter} size="2x" />
               </a>

               <a href="https://www.facebook.com/" className="socialicons">
                   <FontAwesomeIcon icon={faFacebook} size="2x" />
               </a>

               <a href="https://www.instagram.com/" className="socialicons" >
                    <FontAwesomeIcon icon={faInstagram} size="2x"/>
               </a>
            </div>
        );
    }
}
 
export default Socials;