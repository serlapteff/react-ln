import { type FC, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routerConfig/routerConfig'
import { PageLoader } from 'widgets/PageLoader'

export const AppRouter: FC = () => {
    return (
        <div className="page-wrap">
            <Suspense fallback={<PageLoader/>}>
                <Routes>
                    {
                        // Object.values(routeConfig).map(({element, path})=> (
                        routeConfig.map(({ element, path }) => (
                            <Route path={path} element={element} key={path} />
                        ))
                    }
                </Routes>
            </Suspense>
        </div>
    )
}

// export default AppRouter;
