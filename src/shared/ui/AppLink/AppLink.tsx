
import {classNames} from "shared/lib/classNames/classNames";
import cls from './AppLink.module.scss'
import {Link, LinkProps} from "react-router-dom";
import {FC} from "react";

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red'
}
interface AppLinkProps extends LinkProps{
    classnames?: string;
    theme?: AppLinkTheme;
}
export const AppLink: FC<AppLinkProps> = (props) => {
    const { to, className, children, theme = AppLinkTheme.PRIMARY, ...otherProps } = props
    // console.log(cls[theme])
    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
            {...otherProps}
        >
            { children }
        </Link>
    );
};
