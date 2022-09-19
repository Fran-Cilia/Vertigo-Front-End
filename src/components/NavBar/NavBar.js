import React from "react";
import './nav-bar-styles.css';
import { Link, Route, Router, BrowserRouter } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

export const NavBar = () => {

    return (
        <div className="navBar">
            <img className="logo" data-testid="logo" src={require('../../Images/Logo.png')} alt="Logo" />
            <nav>
                <Link to="payments" className="navLink" id='paymentsLink' data-testid="payment">Pay or Request</Link>

                <Link to="/" className="navLink" id='transactionsLink' data-testid="transaction">Transactions</Link>

                <Link to="profile" className="navLink" id='profileLink' data-testid="profile">Profile</Link>

            </nav>

        </div>
    )
}

export default NavBar