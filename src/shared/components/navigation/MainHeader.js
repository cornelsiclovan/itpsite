import React from 'react';

import './MainHeader.css';

const MainHeader = props => {
    return (
        <header className="main-header">
            {props.children}
        </header>
        // <nav className="navbar header-color">
        //     {props.children}
        // </nav>
    );
};

export default MainHeader;