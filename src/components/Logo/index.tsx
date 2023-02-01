import React from "react";
import { NavLink } from "react-router-dom";

import { routeMain } from "pages/MainPage";
import logo from 'assets/image/Logo.png';

const Logo =() => {
    return (
        <NavLink  to={routeMain()} >
            <img src={logo} alt='logo'/>
        </NavLink>
    )
}

export default Logo;