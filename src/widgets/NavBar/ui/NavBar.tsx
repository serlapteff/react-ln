import {classNames} from "shared/lib/classNames/classNames";
import cls from './NavBar.module.scss'
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {FC} from "react";

interface NavBarProps {
    className?: string;
}
export const NavBar: FC<NavBarProps> = ({className}) => {
    return (
        <div className={classNames(cls.NavBar, {}, [className])}>

            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.PRIMARY} to="/">Главная</AppLink>
                |
                <AppLink theme={AppLinkTheme.RED} to="/about">О компании</AppLink>
            </div>
        </div>
    );
};


