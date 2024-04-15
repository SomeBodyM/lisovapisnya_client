import {classNames} from "shared/lib/classNames/classNames";
import cls from './HeaderNav.module.scss';
import {useTranslation} from "react-i18next";
import {memo} from "react";
import {AppLink} from "shared/ui/AppLink/AppLink";
import {RoutePath} from "shared/config/routeConfig/routeConfig";

interface HeaderNavProps {
    className?: string
}

export const HeaderNav = memo((props: HeaderNavProps) => {
    const {
        className,
    } = props;
    const {t} = useTranslation();

    return (
        <nav className={classNames(cls.HeaderNav, {}, [className])}>
            <AppLink className={cls.link} to={RoutePath.portfolio}>{t('PORTFOLIO')}</AppLink>
            <AppLink className={cls.link} to={RoutePath.about}>{t('ABOUT ME')}</AppLink>
            <AppLink className={cls.link} to={RoutePath.price}>{t('PRICE')}</AppLink>
        </nav>
    );
});
