import React, {useState} from "react";
import { Routes, Route } from "react-router-dom";

import Footer from "components/Footer";
import Header from "components/Header";
import Burger from "components/Burger";

import MainPage, {routeMain} from "pages/MainPage";
import ByCategoryPage, {routeFilms} from "pages/ByCategoryPage";
import AboutUsPage, {routeAboutUs} from "pages/AboutUsPage";
import SearchPage, {routeSearch} from "pages/SearchPage";
import MovieDetail, {routeMovieDetail} from "pages/MovieDetail";

import './styles.scss';

const AppContent = () => {
    const [width, setWidth] = useState(window.innerWidth);

    window.addEventListener("resize", function() {
      setWidth(window.innerWidth);
    }, false);

    return (
        <div className="app_container">
            {width >= 767 ? <Header /> : <Burger />}
            <main>
                <Routes>
                    <Route path={routeMain()} element={<MainPage/>}/>
                    <Route path={routeFilms()} element={<ByCategoryPage/>}/>
                    <Route path={routeAboutUs()} element={<AboutUsPage/>}/>
                    <Route path={routeSearch()} element={<SearchPage/>}/>
                    <Route path={routeMovieDetail()} element={<MovieDetail/>}/>
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default AppContent;