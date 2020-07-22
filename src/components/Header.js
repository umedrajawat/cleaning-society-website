import React from 'react';
import '../allstyles/header.css';
import {Nav,Navbar} from 'react-bootstrap'
import { Redirect, Link } from 'react-router-dom'

export default function Header() {
    
  // display header section of the home page
    return (
        <div className="header-container">
            <h3>KDU Cleaning Society</h3>
        <div className="header-list-container">
              <div>
                <a>how it works</a>
                </div>
               <div> <a>Our Services</a></div>
                <div><Link to="/Bookings" className="Bookingbtn">Book a Cleaning</Link></div>      
        </div>
    
            
      </div>
    )
}
