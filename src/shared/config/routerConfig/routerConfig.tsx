import { type RouteProps } from 'react-router-dom'
import { About } from 'pages/About'
import { MainPage } from 'pages/MainPage'

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about'
}

export const RouthPath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about'
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
    }
]
