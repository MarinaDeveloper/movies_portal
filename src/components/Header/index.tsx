import React from "react";
import { NavLink } from "react-router-dom";

import { routeMain } from "pages/MainPage";
import { routeFilms } from "pages/ByCategoryPage";
import { routeAboutUs } from "pages/AboutUsPage";
import { routeSearch } from "pages/SearchPage";

import Logo from "components/Logo";

import './styles.scss';

const Header = () => {
    return (
        <header className="header">
            <Logo />
            <nav>
                <NavLink to={routeMain()}>
                    Home
                </NavLink>
                <NavLink to={routeFilms()}>
                    Movies by category
                </NavLink>
                <NavLink to={routeAboutUs()}>
                    About us
                </NavLink>
                <NavLink to={routeSearch()}>
                    Search
                </NavLink>
            </nav>
        </header>
    )
}

export default Header;