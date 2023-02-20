
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'
import { type ButtonHTMLAttributes, type FC } from 'react'

export enum ButtonVariant {
    DEFAULT = 'default',
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERT = 'backgroundInvert'
}
export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl'
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ButtonVariant
    squire?: boolean
    size?: ButtonSize
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className = '',
        children,
        theme = ButtonVariant.DEFAULT,
        squire,
        size = ButtonSize.M,
        ...otherProps
    } = props

    const mods: Record<string, boolean | undefined> = {
        [cls.squire]: squire
    }

    const classes: string[] = [
        className,
        cls[theme],
        cls[size]
        // cls[squire]
    ]
    // console.log(mods)
    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, classes)}
            {...otherProps}
        >
            {children}
        </button>
    )
}
