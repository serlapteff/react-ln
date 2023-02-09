import 'app/styles/index.scss'
import {Link} from "react-router-dom";
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";
import {NavBar} from "widgets/NavBar";

const App = () => {
    const {theme, toggleTheme} = useTheme()
    const classes = classNames('app', {}, [theme])

    return (
        <div className={classes}>
            <div >
                <NavBar/>
                <button onClick={toggleTheme}>toggle</button>
            </div>
           <AppRouter />
        </div>
    );
};

export default App;
