import React, { type FC, useMemo, useState } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext'

const curTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme ?? Theme.DEFAULT

localStorage.setItem(LOCAL_STORAGE_THEME_KEY, curTheme)

const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(curTheme)

  const defaultProps = useMemo(() => ({
    theme,
    setTheme
  }), [theme])

  return (
      <ThemeContext.Provider value={defaultProps}>
          {children}
      </ThemeContext.Provider>
  )
}

export default ThemeProvider
