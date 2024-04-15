import React, {memo, useCallback, useState} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './Header.module.scss'
import LogoPhoto from 'shared/assets/images/portfolio.svg'
import {Icon} from "shared/ui/Icon/Icon";
import {HeaderNav} from "../HeaderNav/HeaderNav";
import {AppLink} from "shared/ui/AppLink/AppLink";
import {RoutePath} from "shared/config/routeConfig/routeConfig";
import {HeaderSocial} from "../HeaderSocial/HeaderSocial";

interface HeaderProps {
    className?: string
}

export const Header = memo(({ className }: HeaderProps) => {
    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.content}>
                <AppLink to={RoutePath.main}>
                    <Icon Svg={LogoPhoto}/>
                </AppLink>
                <HeaderNav/>
                <HeaderSocial/>
            </div>
        </header>
    )
});
