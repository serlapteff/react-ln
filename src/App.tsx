import './styles/index.scss'
import {Routes, Route, Link} from "react-router-dom";
// import MainPage from "./pages/MainPage/MainPage";
// import About from "./pages/About/About";
import {Suspense, useContext, useState} from "react";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {AboutAsync} from "./pages/About/About.async";
import {ThemeContext} from "./theme/ThemeContext";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";

export enum Theme {
    DEFAULT = 'default',
    DARK = 'dark'
}

const App = () => {
    const {theme, toggleTheme} = useTheme()
    const classes = classNames('app', {}, [theme])

    return (
        <div className={classes}>
            <div>
                <button onClick={toggleTheme}>toggle</button>
            </div>
            <Link to="/">Главная</Link>
            <Link to="/about">О компании</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<MainPageAsync/>}/>
                    <Route path="/about" element={<AboutAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
