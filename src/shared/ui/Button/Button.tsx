
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'
import { type ButtonHTMLAttributes, type FC } from 'react'

export enum ThemeButton {
    DEFAULT = 'default',
    CLEAR = 'clear',
    OUTLINE = 'outline'
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ThemeButton
}
export const Button: FC<ButtonProps> = (props) => {
    const { className = '', children, theme = ThemeButton.DEFAULT, ...otherProps } = props
    // console.log(cls[theme])
    return (
        <button
            type="button"
            className={classNames(cls.Button, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    )
}
