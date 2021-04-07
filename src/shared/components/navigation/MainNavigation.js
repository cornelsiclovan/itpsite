import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MainHeader from './MainHeader';
import NavLinks from './NavLinks';


import './MainNavigation.css';
import SideDrawer from './SideDrawer';

const MainNavigation = () => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

    const openDrawerHandler = () => {
        setDrawerIsOpen(true);
    }

    const closeDrawerHandler = () => {
        setDrawerIsOpen(false);
    }
    return (
        <React.Fragment>
            {/* { drawerIsOpen && <Backdrop onClick={closeDrawerHandler} /> }
            <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
                <nav className="main-navigation__drawer-nav">
                    <NavLinks />    
                </nav>
            </SideDrawer> */}
            <MainHeader>
                {/* <button className="main-navigation__menu-btn" onClick={openDrawerHandler}>
                    <span />
                    <span />
                    <span />
                </button> */}
                <h2 className="main-navigation__title">
                    <img src="/images/checked-car.png" width="20" height="20"></img><Link to="/">&nbsp;ITP SAG</Link>
                </h2>
                <nav className="main-navigation__header-nav">
                    <NavLinks />
                </nav>
            </MainHeader>
        </React.Fragment>

        // <React.Fragment>
        // {/* { drawerIsOpen && <Backdrop onClick={closeDrawerHandler} /> }
        // <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        //     <nav className="main-navigation__drawer-nav">
        //         <NavLinks />    
        //     </nav>
        // </SideDrawer> */}
        // <MainHeader>
        //     {/* <button className="main-navigation__menu-btn" onClick={openDrawerHandler}>
        //         <span />
        //         <span />
        //         <span />
        //     </button> */}
           
        //     <Link to="/" className="navbar-brand">ITP SAG</Link>
        //     <div class="float-right">
        //     <ul className="navbar-nav" >
        //         <NavLinks />
        //     </ul>
        //     </div>
        
        // </MainHeader>
        // </React.Fragment>
    );
};

export default MainNavigation;