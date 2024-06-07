import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from './HeaderNav.module.scss';
import {useTranslation} from "react-i18next";
import {memo} from "react";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {RoutePath} from "shared/config/routeConfig/routeConfig";
import {useLocation} from "react-router-dom";
import {HeaderNavBarItems} from "../../model/HeaderNavBarItems";
import {HeaderNavItem} from "widgets/Header/ui/HeaderNavItem/HeaderNavItem";

interface HeaderNavProps {
    className?: string;
    isMainPage?: boolean;
    closeMenu?: () => void;
}

export const HeaderNav = memo((props: HeaderNavProps) => {
    const {
        className,
        isMainPage,
        closeMenu
    } = props;

    return (
        <nav className={classNames(cls.HeaderNav, {}, [className])}>
            {HeaderNavBarItems.map((item) => (
                <HeaderNavItem
                    item={item}
                    isMainPage={isMainPage}
                    key={item.path}
                    onClose={closeMenu}
                />
            ))}
        </nav>
    );
});
