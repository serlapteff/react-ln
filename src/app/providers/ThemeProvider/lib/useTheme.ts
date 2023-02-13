import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext'
import { useContext } from 'react'

interface UseThemeResult {
    toggleTheme: () => void
    theme?: Theme
}

export function useTheme (): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext)

    const toggleTheme: VoidFunction = () => {
        const newTheme = theme === Theme.DARK ? Theme.DEFAULT : Theme.DARK
        if (setTheme != null) {
            setTheme(newTheme)
        }
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    return {
        theme,
        toggleTheme
    }
}
