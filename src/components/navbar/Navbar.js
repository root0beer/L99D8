import React,{useState} from 'react';
import {HiOutlineMenuAlt4} from "react-icons/hi";
import {FaRegTimesCircle} from "react-icons/fa";
import {MdDirectionsBoat} from "react-icons/md";

import "./Navbar.scss";
//rafce is the way to create components now.
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);


  return (
    <div className='navbar'>
        <div className='container'>
            <h1><MdDirectionsBoat className='logoh'/><span>Boat</span>Escapes</h1>
            <button className='btn'>Sign In</button>
            <ul className={click ? "nav_menu active" : "nav_menu"}>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Search</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Contact</a></li>
            </ul>
            <div className='hamburger' onClick = {handleClick}>
                {click ? (<FaRegTimesCircle className = "icon"/>) : (<HiOutlineMenuAlt4 className='icon'/>)}
                
            </div>
        </div>
    </div>
  )
}

export default Navbar