import 'app/styles/index.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from 'app/providers/router'
import { NavBar } from 'widgets/NavBar'
import { Sidebar } from 'widgets/Sidebar'
import { type FC, Suspense } from 'react'

const App: FC = () => {
  const { theme } = useTheme()
  const classes = classNames('app', {}, [theme])

  return (
        <div className={classes}>
            <Suspense fallback="">
                <header>
                    <NavBar/>
                </header>

                <main className="content">
                    <Sidebar />
                    <AppRouter />
                </main>
            </Suspense>
        </div>
  )
}

export default App
