import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { routeMain } from "pages/MainPage";
import { routeFilms } from "pages/ByCategoryPage";
import { routeAboutUs } from "pages/AboutUsPage";
import { routeSearch } from "pages/SearchPage";

import Logo from "components/Logo";

import './styles.scss';

const Burger = () => {
  const [completed, setCompleted] = useState(false);
  return (
    <div className="navbar">
      <div className="nav-container">
        <input className="checkbox" checked={completed} onChange={() => setCompleted(!completed)} type="checkbox" name="" id="" />
        <div className="hamburger-lines">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>
        <div className="logo_burger">
          <Logo />
        </div>
        <nav className="menu-items">
            <NavLink to={routeMain()} onClick={() => setCompleted(!completed)}>
                Home
            </NavLink>
            <NavLink to={routeFilms()} onClick={() => setCompleted(!completed)}>
                Movies by category
            </NavLink>
            <NavLink to={routeAboutUs()} onClick={() => setCompleted(!completed)}>
                About us
            </NavLink>
            <NavLink to={routeSearch()} onClick={() => setCompleted(!completed)}>
                Search
            </NavLink>
        </nav>
      </div>
    </div>
  )
}

export default Burger;