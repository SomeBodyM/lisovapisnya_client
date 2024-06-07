import React, {memo, useCallback, useState} from 'react'
import {classNames, Mods} from 'shared/lib/classNames/classNames'
import cls from './Header.module.scss'
import {RoutePath} from "shared/config/routeConfig/routeConfig";
import {useLocation} from "react-router-dom";
import {Logo} from "shared/ui/Logo/Logo";
import {BurgerMenu} from "../BurgerMenu/BurgerMenu";

interface HeaderProps {
    className?: string
}

export const  Header = memo(({ className }: HeaderProps) => {
    const location = useLocation();
    const isMainPage = location.pathname === RoutePath.main;
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = useCallback(() => {
        setIsOpen(!isOpen);
    }, [isOpen]);

    const closeMenu = useCallback(() => {
        setIsOpen(false)
    }, [])

    const mods: Mods = {
        [cls.open]: isOpen
    }

    return (
        <header className={classNames(cls.Navbar, mods, [className])}>
            <div className={cls.content}>
                <Logo
                    isMainPage={!isOpen && isMainPage}
                />
                <BurgerMenu
                    isMainPage={isMainPage}
                    toggleMenu={toggleMenu}
                    isOpen={isOpen}
                    closeMenu={closeMenu}
                />
            </div>
        </header>
    )
});
