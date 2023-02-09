import 'app/styles/index.scss'
import {Link} from "react-router-dom";
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";
import {NavBar} from "widgets/NavBar";
import {Sidebar} from "widgets/Sidebar";
import {Suspense} from "react";
import {useTranslation} from "react-i18next";

const App = () => {
    const {theme, toggleTheme} = useTheme()
    const classes = classNames('app', {}, [theme])

    return (
        <div className={classes}>
            <Suspense fallback="">
                <header>
                    <NavBar/>
                </header>

                <main className="content">
                    <Sidebar/>
                    <AppRouter />
                </main>
            </Suspense>
        </div>
    );
};

export default App;
