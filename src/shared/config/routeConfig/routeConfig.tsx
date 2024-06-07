import { RouteProps } from 'react-router-dom'
import { MainPage } from 'pages/MainPage'
import { AboutPage } from 'pages/AboutPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import {PortfolioPage} from "pages/PortfolioPage";
import {PricePage} from "pages/PricePage";
import {CategoryDetailsPage} from "pages/CategoryDetailsPage";
import {LoginPage} from "pages/LoginPage";
import {PhotoPage} from "pages/PhotoPage";

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
}

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PORTFOLIO = 'portfolio',
    PRICE = 'price',
    CATEGORY_DETAILS = 'category_details',
    PHOTO = 'photo',
    //last route
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PRICE]: '/price',
    [AppRoutes.PORTFOLIO]: '/portfolio',
    [AppRoutes.CATEGORY_DETAILS]: '/portfolio/',
    [AppRoutes.PHOTO]: '/photo/',
    [AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage/>
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage/>
    },
    [AppRoutes.PRICE]: {
        path: RoutePath.price,
        element: <PricePage/>
    },
    [AppRoutes.PORTFOLIO]: {
        path: RoutePath.portfolio,
        element: <PortfolioPage/>
    },
    [AppRoutes.CATEGORY_DETAILS]: {
        path: `${RoutePath.category_details}:name`,
        element: <CategoryDetailsPage/>
    },
    [AppRoutes.PHOTO]: {
        path: `${RoutePath.photo}:name`,
        element: <PhotoPage/>
    },
    //last
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage/>
    }
}
