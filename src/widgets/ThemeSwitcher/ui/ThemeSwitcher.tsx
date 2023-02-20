import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ThemeSwitcher.module.scss'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
// import ThemeIcon from 'shared/assets/icons/theme-icon.svg'
import { Button, ButtonVariant } from 'shared/ui/Button/Button'
import ThemeDark from 'shared/assets/icons/moon.svg'
import ThemeDefault from 'shared/assets/icons/sun.svg'
import { type FC } from 'react'

interface ThemeSwitcherProps {
    className?: string
}
export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className = '' }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme()
    const classes = classNames(cls.ThemeSwitcher, {}, [className])
    return (
        <Button theme={ButtonVariant.CLEAR} onClick={toggleTheme} className={classes}>
            {/* <ThemeIcon className={cls[theme]}  /> */}
            {theme === Theme.DEFAULT ? <ThemeDefault/> : <ThemeDark/>}
        </Button>
    )
}
