import React from 'react';
import "./Footer.scss";

import {FaFacebook, FaInstagram, FaTwitter, FaPinterest} from "react-icons/fa";


const Footer = () => {
  return (
    <div className='footer'>
        <div className='social'>
            <FaFacebook className='icon'/>
            <FaInstagram className='icon'/>
            <FaTwitter className='icon'/>
            <FaPinterest className='icon'/>
        </div>   
        <div className='container'>
            
            <div className='col'>
                <h3>Company</h3>
                <p>History</p>
                <p>Organizators</p>
                <p>Careers</p>
                <p>Staff</p>
            </div>
            <div className='col'>
                <h3>Learn About</h3>
                <p>Company</p>
                <p>Details</p>
                <p>Planning</p>
                <p>About Us</p>
            </div>
            <div className='col'>
                <h3>Legal</h3>
                <p>Privacy Policy</p>
                <p>Copyright</p>
                <p>Agreement</p>
                <p>Downloads</p>
            </div>
            <div className='col'>
                <h3>Information</h3>
                <p>Delivery</p>
                <p>Events</p>
                <p>Find Us</p>
                <p>Advertisement</p>
            </div>
        </div>     
    </div>
  )
}

export default Footer