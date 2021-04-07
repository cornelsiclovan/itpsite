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
            </li> */}
            <li>
                <NavLink to ='/preturi'><img src=/images/price-tag-euro.png" style="width:20px;height:20px;">&nbsp;PRETURI</NavLink>
            </li>
            <li>
                <NavLink to ='/contact'><img src=/images/location-512.png" style="width:20px;height:20px;">&nbsp;CONTACT</NavLink>
            </li>
        </ul>
    )
}

export default NavLinks;