import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
    const isLoggedIn = false; // This should be determined using your authentication logic

    return (
        <div className="navbar">
            <div className="navbar-left">
                <span className="brand">InboxInspire</span>
            </div>
            <div className="navbar-right">
                {!isLoggedIn ? (
                    <>
                        <Link to="/submit" className="text-button">Submit</Link>
                        <Link to="/gopro" className="text-button">Go Pro</Link>
                        <Link to="/signin" className="fill-button">Sign In</Link>
                    </>
                ) : (
                    <>
                        <img src="path-to-user-avatar" alt="User Avatar" className="user-avatar"/>
                        {/* Add the hamburger menu and its dropdown functionality here */}
                    </>
                )}
            </div>
        </div>
    );
}

export default Navbar;
