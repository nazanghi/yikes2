import React from 'react';
import {NavLink} from 'react-router-dom';
import '../styles/Layout.css';
import Nav from './Nav'


export default ({children}) => {
    return ( 
        <section>
            <Nav/>
            <div>{children}</div>
        </section>
    )
}