import 'app/styles/index.scss'
import {Link} from "react-router-dom";
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";

const App = () => {
    const {theme, toggleTheme} = useTheme()
    const classes = classNames('app', {}, [theme])

    return (
        <div className={classes}>
            <div>
                <button onClick={toggleTheme}>toggle</button>
            </div>
            <Link to="/">Главная</Link>
            |
            <Link to="/about">О компании</Link>
           <AppRouter />
        </div>
    );
};

export default App;
