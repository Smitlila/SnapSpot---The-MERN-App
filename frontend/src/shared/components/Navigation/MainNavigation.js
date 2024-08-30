import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import NavLinks from "./NavLinks";
import MainHearder from "./MainHeader";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIElements/Backdrop";
import './MainNavigation.css'
import logo from '../Navigation/logo.png'


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
            {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
            <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
                <nav className="main-navigation__drawer-nav">
                    <NavLinks />
                </nav>
            </SideDrawer>
            <MainHearder>
                <button className="main-navigation__menu-btn" onClick={openDrawerHandler}>
                    <span />
                    <span />
                    <span />
                </button>
                <h1 className="main-navigation__title">
                    <div className="container1">
                        <img src={logo} alt="Italian Trulli" className="logo"/>
                    </div>
                    <div className="container2">
                        <Link to="/">SnapSpot</Link>
                    </div>
                </h1>
                <nav className="main-navigation__header-nav">
                    <NavLinks />
                </nav>
            </MainHearder>
        </React.Fragment>
        );
}

export default MainNavigation;