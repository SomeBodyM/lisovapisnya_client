import {RoutePath} from "shared/config/routeConfig/routeConfig";

export interface HeaderNavBarItemsType {
    path: string;
    text: string;
    privateRoute?: boolean;
    authOnly?: boolean;
}

export const HeaderNavBarItems: HeaderNavBarItemsType[]= [
    {
        path: RoutePath.portfolio,
        text: 'PORTFOLIO',
    },
    {
        path: RoutePath.about,
        text: 'ABOUT ME',
    },
    {
        path: RoutePath.price,
        text: 'PRICE',
    },
]