import React from "react";
import './nav-bar-styles.css';
import { Link, Route, Router, BrowserRouter } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

export const NavBar = () => {

    return (
        <div className="navBar">
            <img className="logo" data-testid="logo" src={require('../../Images/Logo.png')} alt="Logo" />
            <nav>
                <Link to="transactions" className="navLink" data-testid="payment">Pay or Request</Link>

                <Link to="transactions" className="navLink" data-testid="transaction">Transactions</Link>

                <Link to="profile" className="navLink" data-testid="profile">Profile</Link>

            </nav>

        </div>
    )
}

export default NavBar