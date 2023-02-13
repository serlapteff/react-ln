import { type RouteProps } from 'react-router-dom'
import { About } from 'pages/About'
import { MainPage } from 'pages/MainPage'
import { NotFoundPage } from 'pages/NotFoundPage'

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'not-found'
}

export const RouthPath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.NOT_FOUND]: '*'
}

// export const routeConfig: Record<AppRoutes, RouteProps> = {
//     [AppRoutes.MAIN]: {
//         path: RouthPath.main,
//         element: <MainPage/>
//     },
//     [AppRoutes.ABOUT]: {
//         path: RouthPath.about,
//         element: <About/>
//     },
// }

// (RouteProps & { title: AppRoutes })[]
export const routeConfig: RouteProps[] = [
    {
        path: RouthPath.main,
        element: <MainPage/>
    // title: AppRoutes.MAIN
    },
    {
        path: RouthPath.about,
        element: <About/>
    // title: AppRoutes.MAIN
    },
    {
        path: RouthPath['not-found'],
        element: <NotFoundPage/>
    // title: AppRoutes.MAIN
    }
]
