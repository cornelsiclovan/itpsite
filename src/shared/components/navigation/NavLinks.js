import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../../context/auth-context';

import './NavLinks.css';

const NavLinks = props => {
    const auth = useContext(AuthContext);

    return (
        <ul className="nav-links">
            {/* <li>
                <NavLink to ='/' exact>ACASA</NavLink>
            </li> 
            <li>
                <NavLink to ='/preturi'>PRETURI</NavLink>
            </li>*/}
            <li>
                <NavLink to ='/contact'>CONTACT</NavLink>
            </li>
        </ul>
    )
}

export default NavLinks;
