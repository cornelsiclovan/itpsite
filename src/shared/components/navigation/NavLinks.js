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
                <img src="/images/price-tag-euro.png" width="20" height="20"></img><NavLink to ='/preturi'>&nbsp;PRETURI</NavLink>
            </li>
            <li>
                <img src="/images/location-512.png" width="20" height="20"></img><NavLink to ='/contact'>&nbsp;CONTACT</NavLink>
            </li>
        </ul>
    )
}

export default NavLinks;