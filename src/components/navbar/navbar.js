import './navbar.css';
import React, { useState, useEffect } from 'react';

export default function NavBar() {
    const [index, setIndex] = useState(0);

    useEffect(() => {

      }, []);

    return (
        <div className="navbar-div">
            <div className='navbar-header-div'>
                <button className='navbar-header'></button>
                <p className='navbar-header-text'>HOME</p>
            </div>
            <div className='navbar-header-div'>
                <button className='navbar-header'></button>
                <p className='navbar-header-text'>ABOUT</p>
            </div>
            <div className='navbar-header-div'>
                <button className='navbar-header'></button>
                <p className='navbar-header-text'>PROJECTS</p>
            </div>
            <div className='navbar-header-div'>
                <button className='navbar-header'></button>
                <p className='navbar-header-text'>CONTACT</p>
            </div>
        </div>
    );
}