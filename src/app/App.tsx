import 'app/styles/index.scss'
import {Routes, Route, Link} from "react-router-dom";
import {Suspense} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {About} from "pages/About";
import {MainPage} from "pages/MainPage";

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
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/about" element={<About/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
