import {classNames} from "shared/lib/classNames/classNames";
import cls from './Footer.module.scss';
import {useTranslation} from "react-i18next";
import React, {memo} from "react";
import {RoutePath} from "shared/config/routeConfig/routeConfig";
import {Icon} from "shared/ui/Icon/Icon";
import LogoPhoto from "shared/assets/images/portfolio.svg";
import {AppLink} from "shared/ui/AppLink/AppLink";

interface FooterProps {
    className?: string
}

export const Footer = memo((props: FooterProps) => {
    const {
        className,
    } = props;
    const {t} = useTranslation();

    return (
        <footer className={classNames(cls.Footer, {}, [className])}>
            <div className={cls.content}>
                <div className={cls.leftBlock}>
                    <AppLink to={RoutePath.main}>
                        <Icon Svg={LogoPhoto}/>
                    </AppLink>
                </div>
                <div className={cls.rightBlock}>
                    <nav className={cls.nav}>
                        <AppLink className={cls.link} to={RoutePath.portfolio}>{t('PORTFOLIO')}</AppLink>
                        <AppLink className={cls.link} to={RoutePath.about}>{t('ABOUT ME')}</AppLink>
                        <AppLink className={cls.link} to={RoutePath.price}>{t('PRICE')}</AppLink>
                    </nav>
                    <div className={cls.social}>
                        <a href="" className={cls.link}>{t('inst →')}</a>
                        <a href="" className={cls.link}>{t('fb →')}</a>
                    </div>
                </div>
            </div>
        </footer>
    );
});
