import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = props => {
    return (
        <ul className="nav-links">
            <li>
                <NavLink to ='/'>ACASA</NavLink>
            </li>
            <li>
                <NavLink to ='/price'>PRETURI</NavLink>
            </li>
            <li>
                <NavLink to ='/contact'>CONTACT</NavLink>
            </li>
        </ul>
    )
}

export default NavLinks;