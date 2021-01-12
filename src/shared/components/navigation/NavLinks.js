import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = props => {
    return (
        <ul className="nav-links">
            {/* <li>
                <NavLink to ='/' exact>ACASA</NavLink>
            </li> */}
            <li>
                <NavLink to ='/preturi'>PRETURI</NavLink>
            </li>
            <li>
                <NavLink to ='/contact'>CONTACT</NavLink>
            </li>
        </ul>
    )
}

export default NavLinks;