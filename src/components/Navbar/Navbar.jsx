import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import './Navbar.scss';


const Navbar = (props) => {
    return <nav className="App__nav nav">

    <img src="https://i.pinimg.com/originals/f6/d1/d2/f6d1d2358b2f812b837915ed0e1f2e72.jpg" alt="" />
    <NavLink to="/gallery" className="nav__gallery-link link">Gallery</NavLink>
    <NavLink to="/upload" className="nav__upload-link link">Upload</NavLink>    
    


    </nav>;
};



export default Navbar;