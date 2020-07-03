import React from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css'

 const Navbar = ()=>{
    return(
            <nav className="nav-wrapper">
                <div className="container">
                    <ul className="right">
                        <li><Link to="/" className="brand-logo"><img src="https://www.bmcsoftware.com.au/content/experience-fragments/bmc/language-masters/en/customerspotlights/deutsche-telekomag/deutsche-telekomag/_jcr_content/root/customer_spotlight/logo.img.png" className='logo' alt='logo'/></Link></li>
                        <li><Link to="/" className="nav-text">Shop</Link></li>
                        <li><Link to="/cart" className="nav-text">My cart</Link></li>
                        <li><Link to="/cart"><img src="https://t7.rbxcdn.com/7944ec53125aaf6a278deaaa64976817" className='cart-logo' alt='cart-logo'></img></Link></li>
                    </ul>
                </div>
            </nav>  
    )
}

export default Navbar;