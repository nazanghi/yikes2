import React from 'react';
import {NavLink} from 'react-router-dom';
import '../styles/Nav.css';


export default ({/**take auth props */}) => {
    return  {/**auth props */} ? (
        <header>
            <nav>
                <NavLink
                to="/"
                onClick={() => { localStorage.clear() }}
                >
                <h3>Sign Out</h3>
                </NavLink>
                <h1><NavLink to="/reviews">View Reviews</NavLink></h1>
            </nav>
        </header>
        ) : (
        <header>
            <nav>
                <NavLink to="/register">
                <h3>Sign Up</h3>
                </NavLink>
                <NavLink to="/login">
                <h3>Sign In</h3>
                </NavLink>
                <h1><a href='/'>Yikes</a></h1>
            </nav>
        </header>
        )
}