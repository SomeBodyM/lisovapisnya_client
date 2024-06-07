import cls from './HeaderNavItem.module.scss';
import {useTranslation} from "react-i18next";
import {memo} from "react";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {HeaderNavBarItemsType} from "../../model/HeaderNavBarItems";
import {classNames, Mods} from "shared/lib/classNames/classNames";

interface HeaderNavItemProps {
    className?: string;
    item: HeaderNavBarItemsType;
    isMainPage?: boolean;
    onClose?: () => void
}

export const HeaderNavItem = memo((props: HeaderNavItemProps) => {
    const {
        className,
        item,
        isMainPage,
        onClose
    } = props;
    const {t} = useTranslation();

    const mods: Mods = {
        [cls.adminRoute]: item.authOnly
    }

    return (
        <AppLink
            className={classNames(cls.HeaderNavItem, mods, [className])}
            to={item.path}
            theme={isMainPage ? AppLinkTheme.NORMAL : AppLinkTheme.BLACK}
            onClick={onClose}
        >
            {t(item.text)}
        </AppLink>
    );
});
